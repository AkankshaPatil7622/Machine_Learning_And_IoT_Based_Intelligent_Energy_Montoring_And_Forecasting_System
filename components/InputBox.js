import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { scale } from "react-native-size-matters";

const InputBox = ({
  title,
  placeholder,
  keyboardType,
  autoComplete,
  value,
  setValue,
  secureTextEntry,
  autoCapitalize
}) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        value={value}
        onChangeText={(text) => setValue(text)}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      ></TextInput>
    </View>
  );
};

export default InputBox;
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
