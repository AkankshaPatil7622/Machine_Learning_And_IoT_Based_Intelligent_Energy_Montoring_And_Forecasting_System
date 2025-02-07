import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { scale } from "react-native-size-matters";
const PhoneInput = ({ title, placeholder,value,setValue}) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        maxLength={10}
        keyboardType="numeric"
        value={value}
        onChangeText={(text)=>setValue(text)}
      ></TextInput>
    </View>
  );
};

export default PhoneInput;
const styles = StyleSheet.create({
  input: {
    width: scale(260),
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: scale(7),
  },
  label: {
    marginLeft: scale(48),
    marginVertical: scale(10),
    fontWeight: "500",
  },
});
