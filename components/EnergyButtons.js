import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

const EnergyButtons = ({title,style,onpress}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.mainBtn,style]} onPress={onpress}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EnergyButtons;
const styles = StyleSheet.create({
    mainBtn : {
        backgroundColor : "#00cc33",
        minHeight : scale(50),
        minWidth :scale(130),
        marginVertical : scale(14),
        justifyContent : 'center',
        borderRadius : scale(5)
    },
    btnText : {
        textAlign : 'center',
        fontSize : scale(15),
        color : "#fff",
        fontWeight : "700"
    }
})