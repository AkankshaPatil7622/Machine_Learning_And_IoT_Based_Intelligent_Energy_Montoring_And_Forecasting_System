import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
//stucked here

const getStyle = (theme,colors) => ({
  headerText : {
    fontSize: 20,
          marginLeft: 10,
          fontWeight: "700",
          color: theme === "dark" ? colors.text : "#000"
  },
  header: {
    height: scale(50),
    width: "90%",
    justifyContent: "center",
    marginLeft: scale(10),
    flexDirection: "row",
    marginTop: scale(20),
    justifyContent: "",
  },
})
const TopHeader = ({ headerTitle }) => {
  const theme = useSelector((state)=>state.theme.theme)
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme,colors);
  return (
    <View style={styles.header}>
      <Text
        style={styles.headerText}
      >
        {headerTitle}
      </Text>
    </View>
  );
};

export default TopHeader;

