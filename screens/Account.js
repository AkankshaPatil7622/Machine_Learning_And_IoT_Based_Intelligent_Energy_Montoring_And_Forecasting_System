import React from "react";
import LargeCard from "@/components/LargeCard";
import { View, Text, StyleSheet } from "react-native";
import SmallCards from "@/components/SmallCards";
import { useSelector } from "react-redux";

const getStyle = (theme, colors) => ({
  container: {
    flex: 1,
    backgroundColor: theme === "dark" ? colors.background : "#f5f5ff",
  },
});
const Account = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);
  return (
    <View style={styles.container}>
      <LargeCard />
      <SmallCards title="Help" onpress={() => navigation.navigate("help")} />
      <SmallCards title="Setting" onpress={() => navigation.navigate("setting")}/>
    </View>
  );
};

export default Account;
