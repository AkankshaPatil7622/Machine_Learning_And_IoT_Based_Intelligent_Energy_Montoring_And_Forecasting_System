import React,{useEffect, useState} from 'react'
import {View,StyleSheet,Text} from "react-native";
import { firebase } from './firebaseConfig';
const FetchData = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const year = '2024';
  const month = '08'; // example: August

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firebase
          .app()
          .database()
          .ref(`/consumption_data/${year}/${month}`)
          .once('value');

        const fetchedData = snapshot.val();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <ScrollView>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Energy Data</Text>
      {data ? (
        Object.entries(data).map(([key, value]) => (
          <View key={key} style={{ padding: 10 }}>
            <Text>{key}: {JSON.stringify(value)}</Text>
          </View>
        ))
      ) : (
        <Text>No data found.</Text>
      )}
    </ScrollView>
  );
};

export default FetchData;
