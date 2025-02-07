import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { scale } from "react-native-size-matters";
import AlertMessage from "../components/AlertMessage";
import { useSelector } from "react-redux";

const getStyle = (theme, colors) => ({
  container: {
    flex: 1,
    backgroundColor: theme === "dark" ? colors.background : "#f5f5ff",
  },
  msgContainer: {
    height: "100%",
    width: "100%",
    marginVertical: scale(20),
  },

});
const Notifications = () => {
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);
  return (
    <View style={styles.container}>
      <Header name="Notifications" />
      <ScrollView>
        <View style={styles.msgContainer}>
          <AlertMessage text="Low Voltage Warning! Check your power supply" />

          <AlertMessage text=" High Voltage Detected! Turn off equipment immediately" />

          <AlertMessage text=" High Voltage Detected! Turn off equipment immediately" />
          <AlertMessage text="Low Voltage Warning! Check your power supply" />
          <AlertMessage text="Low Voltage Warning! Check your power supply" />
          <AlertMessage text=" High Voltage Detected! Turn off equipment immediately" />
          <AlertMessage text="High Voltage " />
          <AlertMessage text="Low Voltage Warning! Check your power supply" />
          <AlertMessage text="High Voltage" />
          <AlertMessage text="Low Voltage Warning! Check your power supply" />
          <AlertMessage text="something went wrong" />
          <AlertMessage text=" High Voltage Detected! Turn off equipment immediately" />
          <AlertMessage text=" High Voltage Detected! Turn off equipment immediately" />
          <AlertMessage text=" High Voltage Detected! Turn off equipment immediately" />
          <AlertMessage text="High Voltage Detected! Turn off equipment immediately" />
          <AlertMessage text="Low Voltage Warning! Check your power supply" />
          <AlertMessage text=" High Voltage Detected! Turn off equipment immediately" />
          <AlertMessage text=" High Voltage Detected! Turn off equipment immediately" />
          <AlertMessage text="Low Voltage Warning! Check your power supply" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Notifications;
