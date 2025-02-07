import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDrawer } from "./DrawerContext";
import { useSelector } from "react-redux";
const getStyle = (theme,colors) => ({
    headline : {
      
        fontSize: scale(20),
        fontWeight: "600",
        marginHorizontal: scale(20),
        color : theme === "dark" ? "#fff" : "#000",
        marginTop : scale(32)
    },
    container: {
      height: scale(40),
      width: scale(40),
      borderColor: "black",
      backgroundColor : "#fff",
      marginLeft : scale(10),
      paddingHorizontal: scale(6),
      marginTop : scale(25),
      borderRadius : scale(50),
      
    },
    headerContainer: {
      height: scale(80),
      width: "100%",
      marginTop: scale(0.1),
      justifyContent: "",
      backgroundColor : "transparent",
      flexDirection : "row"
    },
    menuIcon : {
      marginTop : scale(6),
    }
})
const Header = ({name}) => {
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);

  const { openDrawer } = useDrawer();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
       style={styles.container}
       onPress={()=>openDrawer()}>
        <Ionicons name="menu-outline" size={30} color="black" style={styles.menuIcon}/>
      </TouchableOpacity>
      <Text style={styles.headline}>{name}</Text>
    </View>
  );
};

export default Header;

