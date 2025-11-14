import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import TopHeader from "../components/TopHeader";
import SmallCards from "@/components/SmallCards";
import { scale, verticalScale } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../screens/redux/Action";
import Entypo from "@expo/vector-icons/Entypo";

export const getStyle = (theme, colors) => ({
  container: {
    flex: 1,
    backgroundColor: theme === "dark" ? colors.background : "#f5f5ff",
  },
  themeBtn: {
    height: scale(30),
    width: scale(70),
    borderWidth: 0.5,
    borderRadius: scale(60),
    position: "absolute",
    right: scale(30),
    top: scale(15),
    backgroundColor: "#fff",
  },
  icon: {
    height: scale(28),
    width: scale(28),
    borderRadius: scale(40),
    backgroundColor: "#1db954",
    marginBottom: scale(3),
    position: "absolute",
    top: 0,
  },
});
const Setting = () => {
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    if (animation.value == 0) {
      animation.value = withTiming(scale(41), { duration: 200 });
    } else {
      animation.value = withTiming(0, { duration: 200 });
    }
    dispatch(changeTheme());
  };
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);
  // const colors = useSelector((state)=>state.theme.colors)
  const animation = useSharedValue(0);
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }],
    };
  });

  const handleLogout = () => {};
  return (
    <View style={styles.container}>
      <TopHeader headerTitle="Setting" />
      <View style={{ position: "relative" }}>
        <SmallCards title="Change Theme" />
        <View style={styles.themeBtn}>
          <TouchableOpacity onPress={() => handleThemeChange()}>
            <Animated.View
              style={[
                { marginTop: scale(0.8), marginLeft: scale(0) },
                animationStyle,
              ]}
            >
              <View style={styles.icon}></View>
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* <SmallCards title="Logout" />

        <TouchableOpacity
        onPress={handleLogout}
        ></TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Setting;
const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  logoutBtn: {
    height: verticalScale(50), // Adjusted height for better touch interaction
    width: scale(200), // Adjusted width for a better size
    justifyContent: "center", // Centering the icon inside the button
    alignItems: "center", // Centering the icon inside the button
    backgroundColor: "#f0f0f0", // Light background for logout button
    borderRadius: scale(10), // Rounded corners for the button
  },
  logouticonview: {
    flexDirection: "row", // Makes sure the icon is aligned with text (if any)
    justifyContent: "center", // Aligns the icon horizontally in the center
    alignItems: "center", // Aligns the icon vertically in the center
    paddingVertical: verticalScale(5), // Adds vertical padding for a better layout
    backgroundColor: "#fff", // White background for the icon view
    borderRadius: scale(50), // Circular shape for the icon container
  },
});
