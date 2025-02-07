import React from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity,StatusBar} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EnergyInsight from "../screens/EnergyInsight";
import Account from "../screens/Account";
import Weather from "../screens/Weather";
import IoT from "../screens/IoT";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import EnergyInfo from "../components/EnergyInfo";
import EnergyStack from "../components/EnergyStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

const getStyle = (theme, color) => {

};
const HomeScreen = () => {
let darkColor = "#1db954";
let lightColor = "#1db954";
  useFocusEffect(() => {
   {
    theme === "dark" ? 
    StatusBar.setBackgroundColor(darkColor) : StatusBar.setBackgroundColor(lightColor) ;
   } // Set Android StatusBar color
    StatusBar.setBarStyle('dark-content')});
    
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarShowLabel: false,
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons
              name="menu-outline"
              size={30}
              color="white"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        ),
        tabBarStyle: {
          height: scale(60),
          backgroundColor: theme === "dark" ? "#1db954" : "#1db954", // Background color
        },
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: scale(20),
          marginLeft: scale(10),
        },
        tabBarIconStyle: {
          marginTop: scale(8), // Adjust icon position
        },
        headerStyle: {
          backgroundColor: theme === "dark" ? "#1db954" : "#1db954", // Background color for the header
        },
        headerTintColor: "#fff",
        tabBarIcon: ({ size }) => {
          if (route.name == "Energy Consumption and Cost") {
            return (
              <MaterialIcons
                name="home"
                focused={true}
                size={27}
                color="#f7f7ff"
              />
            );
          } else if (route.name == "Energy Insight") {
            return <MaterialIcons name="insights" size={27}
            color="#f7f7ff"/>;
          } else if (route.name == "Weather") {
            return (
              <MaterialCommunityIcons
                name="weather-partly-lightning"
               size={27}
                color="#f7f7ff"
              />
            );
          } else if (route.name == "IoT") {
            return (
              <MaterialCommunityIcons
                name="home-automation"
                size={27}
                color="#f7f7ff"
              />
            );
          } else if (route.name == "Account") {
            return (
              <MaterialCommunityIcons
                name="account-circle"
                size={27}
                color="#f7f7ff"
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Energy Consumption and Cost" component={Home} />
      <Tab.Screen name="Weather" component={Weather} />
      <Tab.Screen name="Energy Insight" component={EnergyStack} />
      <Tab.Screen name="IoT" component={IoT} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
