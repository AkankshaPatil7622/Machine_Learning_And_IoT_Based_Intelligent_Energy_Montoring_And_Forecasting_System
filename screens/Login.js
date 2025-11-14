import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { scale } from "react-native-size-matters";

import InputBox from "@/components/InputBox";
import Buttons from "@/components/Buttons";
import axios from "axios";

const Login = ({ navigation }) => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //functions
  //btnFunction

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        setLoading(false);
        Alert.alert("Warning", "Please fill all the fields");
        return;
      }

      const { data } = await axios.post("http://192.168.169.128:5000/login", {
        email,
        password,
      });
      setLoading(false);
      Alert.alert("Success", "Login successful!");
      navigation.replace('mainscreen'); // Redirect to Home or Dashboard after login

      // alert(data && data.messege);
    } catch (error) {
      setLoading(false);
      const errorMessage =
      error.response?.data?.messege || "Invalid credentials";
    Alert.alert("Error", errorMessage);
    console.warn(error);
    }
  };
  return (
    <ScrollView style={styles.registerContainer}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          textAlign: "center",
          marginVertical: scale(50),
        }}
      >
        Login
      </Text>

      <InputBox
        title="Email"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={email}
        setValue={setEmail}
      />
      <InputBox
        title="Password"
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />

      <Buttons
        btnName={loading ? "Please wait.." : "Login"}
        handleSubmit={handleSubmit}
      />
      <Text style={{ textAlign: "center" }}>
        Don't have an account ?
        <Text
          style={{ fontWeight: "800", color: "#219ebc" }}
          onPress={() => navigation.navigate("signup")}
        >
          Register
          
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  registerContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f7f7ff",
  },
});
