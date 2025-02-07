import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { scale } from "react-native-size-matters";

const AlertMessage = ({text}) => {
  return (
    <View style={[styles.message, {maxWidth : `${Math.min(75,text.length * 2.5)}%`}]}>
      <Text style={styles.msgText}>{text}</Text>
    </View>
  )
}

export default AlertMessage
const styles = StyleSheet.create({
    msgText: {
      marginLeft: scale(10),
      marginBottom: scale(2),
      fontSize: scale(15),
    },
    message: {
      // height: scale(35),
      backgroundColor: "#8DCBE0",
      marginHorizontal: scale(20),
      borderRadius: scale(15),
      borderTopLeftRadius: 0,
      justifyContent: "center",
      flexShrink: scale(1),
      paddingVertical: scale(5),
      marginBottom : scale(10)
    },
  });
  