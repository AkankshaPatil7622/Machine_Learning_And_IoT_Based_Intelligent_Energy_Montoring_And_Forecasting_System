import React, { useState } from 'react'
import {View,Text,StyleSheet}from "react-native";
const Datetimepick = () => {
    const [date,setDate] = useState(new Date);
    const [showPicker,setShowPicker] = useState(false);
  return (
    <View>
        <Text>Date : {date.toDateString}</Text>
    </View>
  )
}

export default Datetimepick
