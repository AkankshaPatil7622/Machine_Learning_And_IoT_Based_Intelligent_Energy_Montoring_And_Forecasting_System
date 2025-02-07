import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { useSelector } from "react-redux";

const getStyle = (theme, colors) => ({
  cardBox: {
    height: verticalScale(160),
    width: scale(145),
    borderRadius: 6,
    backgroundColor: theme === "dark" ? "#161a1d" : "#fff",
    marginTop: 30,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: scale(17),
    textAlign: "center",
    padding: scale(10),
    color: theme === "dark" ? "#ced4da" : "gray",
  },
  cardValue: {
    fontSize: scale(22),
    textAlign: "center",
    marginTop: scale(20),
    fontWeight: "600",
    color: theme === "dark" ? colors.text : "#000",
  },
  Icon: {
    alignSelf: "center",
    paddingTop: scale(20),
  },
});

const Card = ({ title, value }) => {
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);
  const renderIcon = () => {
    if (title == "Wind speed") {
      return theme === "dark" ? (
        <Feather name="wind" size={30} color="white" />
      ) : (
        <Feather name="wind" size={30} color="black" />
      );
    } else if (title === "Temperature") {
      return theme === "dark" ? (
        <FontAwesome6 name="temperature-half" size={30} color="white" />
      ) : (
        <FontAwesome6 name="temperature-half" size={30} color="black" />
      );
    } else if (title === "Pressure") {
      return theme === "dark" ? (
        <Entypo name="gauge" size={24} color="white" />
      ) : (
        <Entypo name="gauge" size={24} color="black" />
      );
    } else if (title === "Humidity") {
      return theme === "dark" ? (
        <MaterialIcons name="water" size={30} color="white" />
      ) : (
        <MaterialIcons name="water" size={30} color="black" />
      );
    } else if (title === "Rainfall") {
      return theme === "dark" ? (
        <Fontisto name="rains" size={24} color="white" />
      ) : (
        <Fontisto name="rains" size={24} color="black" />
      );
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.cardBox}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardValue}>{value}</Text>
        <View style={styles.Icon}>{renderIcon()}</View>
      </View>
    </SafeAreaView>
  );
};

export default Card;
