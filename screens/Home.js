import { LinearGradient } from "expo-linear-gradient";
import { Button, StyleSheet, View } from "react-native";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { createContext, useState } from "react";
import GraphScreen from "@/screens/GraphScreen";
import { useSelector } from "react-redux";
import FireBaseData from "@/components/FireBaseData";

const getStyle = (theme,colors) => ({
  container :{
    flex : 1,
    backgroundColor : theme === "dark" ? colors.background : "#f5f5ff"

  },
  cardContainer : {
    flexDirection : "row",
    justifyContent : "space-around",
  }
})
const Home = ({navigation}) => {
  const theme = useSelector((state)=>state.theme.theme);
  const colors = useSelector((state)=>state.theme.colors);
  const styles = getStyle(theme,colors);
  return (//ade8f4
    <View style={styles.container}>
      
    <View style={styles.cardContainer}>
    <Card title="Energy Cost Per Unit" value="5 Rs"/>
    <Card title="Current Cost According to Consumption" value="115 Rs"/>
   
    </View>
    </View>


  );
}


export default Home;
