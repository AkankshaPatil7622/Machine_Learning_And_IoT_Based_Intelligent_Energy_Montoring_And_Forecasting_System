import React from "react";
import {  View, StyleSheet, Text } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const getStyle = (theme,colors) => ({
  container: {
    flex : 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor : theme === "dark" ? colors.background :"#f5f5ff"
  },
  
  status: {
    color: "#01ff09",
  },
  cardBox: {
    // flex : 1,
    height: verticalScale(160),
    width: scale(145),
    borderRadius: 6,
    backgroundColor: theme === "dark" ? "#161a1d" : "#fff",
    marginTop: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
 
  cardTitle: {
    fontSize: scale(17),
    textAlign: "center",
    padding: scale(10),
    color:theme === "dark" ? "#ced4da" : "gray",
  },
  cardValue: {
    fontSize: scale(22),
    textAlign: "center",
    marginTop: scale(20),
    fontWeight: "600",
    color: "#00cc33",
  },

})

const IoT = () => {
  const theme = useSelector((state) => state.theme.theme);
    const colors = useSelector((state) => state.theme.colors);
    const styles = getStyle(theme, colors);

  return (
   
      <View style={styles.container}>
        <View style={styles.cardBox}>
          <Text style={styles.cardTitle}>Device Status</Text>
          <Text style={styles.cardValue}>online</Text>
        </View>
        <Card title="Voltage" value="240 volts" />
        <Card title="Current Unit Consumption" value="43 units" />
        <Card title="Wire Temperature" value="25 °C" />
      </View>
    )

};

export default IoT;

