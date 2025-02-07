import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import LottieView from "lottie-react-native"

const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('signup');
    },3000)
  },[]);
  return (
    <View style={styles.container}>
      <LottieView
      autoPlay
      source={require('../assets/animations/splash.json')}
      style={styles.anim}
      loop={true}
      />
      
      <Text style={styles.splashtext}>Empowering the Future with </Text>
      <Text style={styles.splashtext}>Smart Energy Solutions.</Text>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7ff",
    justifyContent: "center",
    alignItems: "center",
  },
  splashtext: {
    fontSize: moderateScale(20),
    fontWeight: "800",
  },
  anim : {
    height : verticalScale(100),
    width : scale(100)
  }
});
