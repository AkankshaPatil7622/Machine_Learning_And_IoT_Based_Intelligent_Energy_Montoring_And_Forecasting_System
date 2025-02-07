import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { scale } from 'react-native-size-matters';
import EnergyButtons from '../components/EnergyButtons';

const GraphScreen = () => {
    const [Data, setData] = useState([]);
  return (
    <View>
    <View style={styles.btnContainer}>
        <EnergyButtons title="History"/>
        <EnergyButtons title="Prediction"/>
    </View>
     <View style={styles.ExtraBtn}>
     <EnergyButtons title="Daily Consumption"
     style={{backgroundColor : "#2196F3", width : '88%',marginHorizontal: scale(20),marginTop : scale(5)}}/>
     <EnergyButtons title="Select Date"
     style={{backgroundColor : "#2196F3", width : '88%',marginHorizontal: scale(20),marginTop : scale(5)}}/>
     </View>
     <View>
        <FlatList
        data={Data}
        renderItem={(item)=>{item}}/>
     </View>
     </View>
  )
}

export default GraphScreen;
const styles = StyleSheet.create({
    btnContainer : {
        height : scale(80),
        width :  '100%',
        flexDirection : "row",
        justifyContent : "space-around",
        
    },
   ExtraBtn : {
    
   }
})
