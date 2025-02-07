import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

const Buttons = ({ btnName, handleSubmit}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText} onPress={handleSubmit}>
          {btnName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
const styles = StyleSheet.create({
  btn: {
    height: scale(40),
    width: scale(200),
    marginVertical: scale(40),
    alignSelf: "center",
    borderRadius: scale(6),
    backgroundColor: "#219ebc",
  },
  btnText: {
    fontSize: scale(17),
    fontWeight: "500",
    textAlign: "center",
    marginVertical: scale(8),
    color: "#fff",
  },
});
