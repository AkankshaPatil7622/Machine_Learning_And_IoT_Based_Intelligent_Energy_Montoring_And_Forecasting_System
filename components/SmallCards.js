import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
const getStyle = (theme, colors) => ({
  smallCrd: {
    height: scale(50),
    width: "90%",
    backgroundColor: theme === "dark" ? "#161a1d" : "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: scale(5),
    marginVertical: scale(5),
  },
  titleText: {
    fontWeight: "600",
    marginLeft: scale(20),
    color: theme === "dark" ? colors.text : "#000",
  },
  icon: {
    marginRight: scale(20),
    color: theme === "dark" ? colors.text : "#000",
  },
});
const SmallCards = ({ title, onpress }) => {
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);
  return (
    <View style={styles.smallCrd}>
      <Text style={styles.titleText}>{title}</Text>

      <TouchableOpacity style={styles.icon} onPress={onpress}>
        {theme === "dark" ? (
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        ) : (
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SmallCards;
