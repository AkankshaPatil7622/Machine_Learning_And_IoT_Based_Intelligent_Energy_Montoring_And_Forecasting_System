import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../components/Card';
import { createStackNavigator } from '@react-navigation/stack';
import EnergyInsight from '../screens/EnergyInsight';
import Octicons from '@expo/vector-icons/Octicons';
import { scale } from 'react-native-size-matters';
import Header from '../components/Header';
import Foundation from '@expo/vector-icons/Foundation';
import { useSelector } from 'react-redux';

const getStyle = (theme,colors) => ({
  container : {
    flex : 1,
    backgroundColor : theme === "dark" ? colors.background : "#f5f5ff"
},
graphIcon : {
  position : "absolute",
  bottom : scale(40),
  left : scale(50)
  
},
graphContainer : {
  height : scale(200),
  position : "relative",

},
cardContainer : {
  flexDirection : "row",
  justifyContent : "space-around",
  flexWrap : "wrap",
 
},
viewBtn : {
  height : scale(30),
  width : scale(100),
  position : "absolute",
  marginHorizontal : scale(22),
  bottom :scale(10),
  backgroundColor : "#1db954",
  borderRadius : scale(10)
},

btnText : {
  textAlign : "center",
  fontWeight : '500',
  color : "#000",
  fontSize : scale(15),
  marginVertical : scale(3)
}

})
const EnergyInfo = ({navigation})=> {
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);

    const predicted = '30 Units';
    const cost = "5 Rs";
  return (
    <View style={styles.container}>
    <View style={styles.cardContainer}>
      <View style={styles.graphContainer}>
    <Card title="Graph" />
    <TouchableOpacity  onPress={()=>navigation.navigate("Graph")} style={styles.viewBtn}>
    <Text style={styles.btnText}>View</Text>
    </TouchableOpacity>
    {/* <Foundation name="graph-trend" size={60} color="black" style={styles.graphIcon} />     */}
    </View>
    <Card title="Prediction of Current Month" value={predicted} />
    
    </View>
    </View>
  )

  
};

export default EnergyInfo;

