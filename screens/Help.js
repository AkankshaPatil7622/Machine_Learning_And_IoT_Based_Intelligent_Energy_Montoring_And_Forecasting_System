import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import TopHeader from "@/components/TopHeader";
import { scale } from "react-native-size-matters";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const getStyle = (theme, colors) => ({
  container: {
    flex: 1,
    backgroundColor: theme === "dark" ? colors.background : "#f5f5ff",
  },
  info: {
    height: "100%",
    width: "100%",
    backgroundColor: "#C9F4B8",
    // opacity: theme === "dark" ? 0.2 : 0.2,
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
  },
  heading: {
    marginTop: scale(10),
    textAlign: "center",
    fontSize: scale(20),
    fontWeight: "600",
    color: "#000",
  },
  content1: {
    fontSize: scale(15),
    color: "#000",
    marginTop: scale(20),
    alignSelf: "center",
    marginHorizontal: scale(10),
    fontWeight: "500",
  },
  content2: {
    fontSize: scale(15),
    color: "#000",
    marginTop: scale(10),
    alignSelf: "center",
    marginHorizontal: scale(10),
    fontWeight: "500",
  },
  headingText: {
    fontWeight: "600",
    fontSize: scale(19),
    marginHorizontal: scale(10),
    marginTop: scale(10),
    color: "#000",
  },
});
const Help = () => {
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);

  return (
    <View style={styles.container}>
      <TopHeader headerTitle="Help" />
      <ScrollView>
        <View style={styles.info}>
          <Text style={styles.heading}>
            Welcome to the Energy Monitoring App!
          </Text>
          <Text style={styles.content1}>
            This app helps you monitor your energy consumption, predict future
            energy usage, track IoT device status, and much more. {"\n"}Below is
            a quick guide to using the app effectively:
          </Text>
          <View style={{ marginTop: scale(10) }}>
            <Text style={styles.headingText}>Home 🏡</Text>
            <Text style={styles.content2}>
              Access the main dashboard where you can monitor key metrics,
              notifications, and energy details at a glance.
            </Text>

            <Text style={styles.headingText}>Notifications 🔔</Text>
            <Text style={styles.content2}>
              View all important emergency-related notifications here.{"\n"}{" "}
              Keep track of alerts regarding energy usage or device issues.
            </Text>

            <Text style={styles.heading}>Screens Overview</Text>
            <Text style={styles.headingText}>Energy Consumption⚡</Text>
            <Text style={styles.content2}>
              Get real-time energy usage and cost details.{"\n"} See the energy
              cost per unit and the total cost based on your consumed energy.
            </Text>
            <Text style={styles.headingText}>Weather☁🌦</Text>
            <Text style={styles.content2}>
              Check the current weather conditions.{"\n"} Useful for
              understanding external factors affecting energy usage.
            </Text>

            <Text style={styles.headingText}>
              Energy Insights & Prediction📈📉
            </Text>
            <Text style={styles.content2}>
              View energy usage insights and predictions for the current month.
              {"\n"}
              Interact with the Graph of Energy Consumption and Prediction: Tap
              on data points on the graph to see detailed energy consumption for
              that specific day.
            </Text>

            <Text style={styles.headingText}>IoT Device Status🧭</Text>
            <Text style={styles.content2}>
              Monitor the status of your IoT devices: Offline Mode or Online
              Mode status.{"\n"} Current voltage, energy consumption (in units),
              and wire temperature.
            </Text>

            <Text style={styles.headingText}>Account✔</Text>
            <Text style={styles.content2}>
              View and manage your profile information.
            </Text>

            <Text style={styles.headingText}>Setting🔅</Text>
            <Text style={styles.content2}>
              Change the theme of the app to suit your preferences. {"\n"}
              Customize other app-related settings.
            </Text>

            <Text style={styles.headingText}>Tips for Best Experience😊</Text>
            <Text style={styles.content2}>
              1. Tap on graph points for detailed insights into daily energy
              usage.{"\n"}
              2. Regularly check the IoT Device Status to ensure proper energy
              monitoring.{"\n"}3. Enable Notifications to stay updated on
              emergency alerts.{"\n"}4. Customize the app theme in Settings for
              a personalized experience.
            </Text>

            <Text style={{ marginBottom: scale(20) }}></Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Help;
