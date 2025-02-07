import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import EnergyInfo from "../components/EnergyInfo";
import Account from "../screens/Account";
import {Button,SafeAreaView,TouchableOpacity,StyleSheet} from "react-native"; // For button to toggle theme
import EnergyInsight from "./EnergyInsight";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Header from "../components/Header";
import EnergyStack from "../components/EnergyStack";
import { DrawerProvider } from "../components/DrawerContext";
import Notifications from "./Notifications";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
const Drawer = createDrawerNavigator();

const DrawerWrapper = ({ children, navigation }) => {
  return <DrawerProvider navigation={navigation}>{children}</DrawerProvider>;
};
const getStyle =(theme,colors) =>(
  {
    drawer : {
      backgroundColor : theme === "dark"? colors.background : "#fff"
    },
  }
)
const MainScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);

  return (
    // <NavigationContainer>
    <Drawer.Navigator
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        drawerType: "slide",
        drawerStyle: {
          minWidth: scale(60),
          backgroundColor : theme === "dark" ? colors.background : "#fff"
        },
        drawerLabelStyle : {
          fontSize : 14,
          color : theme === "dark"? "#1db954" : "#000"
        },

        drawerIcon: ({ focused, size, color }) => {
          if (route.name === "Home") {
            return <Entypo name="home" size={24} color="#1db954" />;
          } else if (route.name === "Notifications") {
            return (
              <Ionicons name="notifications-sharp" size={24} color="#1db954" />
            );
          } 
        },
      })}
    >
      <Drawer.Screen name="Home">
        {(props) => (
          <DrawerWrapper navigation={props.navigation}>
            <HomeScreen {...props} />
          </DrawerWrapper>
        )}
      </Drawer.Screen>

      <Drawer.Screen name="Notifications">
        {(props) => (
          <DrawerWrapper navigation={props.navigation}>
            <Notifications {...props} />
          </DrawerWrapper>
        )}
      </Drawer.Screen>

      {/* <Drawer.Screen name="Energy Insight" component={EnergyStack} /> */}
     
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AuthContainer: {
    marginTop: scale(40),
    borderWidth: 1,
    width: "100%",
    height: "100%",
  },
  SignUpText: {
    marginTop: scale(50),
    fontSize: scale(30),
    fontWeight: "800",
    textAlign: "center",
  },
  labelText: {
    fontSize: scale(20),
    paddingHorizontal: scale(10),
  },
  textField: {
    height: scale(40),
  },
});
