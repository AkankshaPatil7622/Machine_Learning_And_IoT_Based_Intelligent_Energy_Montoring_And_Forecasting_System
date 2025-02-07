import React from 'react'
import {View, Text,StyleSheet} from 'react-native';
import { scale} from 'react-native-size-matters'
const Breaker = ({title}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.insideText}>{title}</Text>
    </View>
  )
}

export default Breaker
const styles = StyleSheet.create({
    container : {
        height : scale(40),
        width : '90%',
        // opacity : 0.2,
        marginHorizontal : scale(20),
        marginVertical : scale(18),
        backgroundColor : "#a2d2ff",
        borderRadius : scale(5)
    },
    insideText : {
        textAlign : "center",
        paddingVertical : scale(10),
        fontSize : scale(14),
        fontWeight : "700"
    }
})