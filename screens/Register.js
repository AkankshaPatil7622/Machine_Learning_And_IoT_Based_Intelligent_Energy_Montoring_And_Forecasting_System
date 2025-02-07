import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native";
import { scale } from "react-native-size-matters";
// import axios from "axios";

import InputBox from "@/components/InputBox";
import PhoneInput from "@/components/PhoneInput";
import Buttons from "@/components/Buttons";
import Breaker from "@/components/Breaker";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [merterType, setMeterType] = useState("");
  const [meterId, setMeterId] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !phone) {
        setLoading(false);
        Alert.alert("Warning", "Please fill all the fields");

        return;
      }
      setLoading(false);
      const { data } = await axios.post(
        "http://192.168.219.128:6000/api/v1/auth/register",
        { name, phone, email, password }
      );
      alert(data && data.messege);
    } catch (error) {
      alert(error.response.data.messege);
      setLoading(false);
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
        Register
      </Text>
      <Breaker title="PERSONAL INFORMATION" />
      <InputBox
        title="Name"
        placeholder="Name"
        value={name}
        setValue={setName}
      />
      <InputBox
        title="Address"
        placeholder="Address"
        value={address}
        setValue={setAddress}
      />

      <PhoneInput
        title="Mobile"
        placeholder="mobile"
        value={phone}
        setValue={setPhone}
      />
     
      <Breaker title="METER DETAILS" />
      <InputBox
        title="Meter ID"
        placeholder="Meter ID"
        value={address}
        setValue={setAddress}
      />

      <InputBox
        title="Connection Type"
        placeholder="Connection Type"
        value={address}
        setValue={setAddress}
      />



      <Breaker title="NEAREST FIRESTATION" />

      <InputBox
        title="Location"
        placeholder="Location"
        value={address}
        setValue={setAddress}
      />
    <PhoneInput
        title="Contact"
        placeholder="Contact"
        value={phone}
        setValue={setPhone}
      />

      <Breaker title="EMERGENCY CONTACTS" />

      <PhoneInput
        title="Mobile 1"
        placeholder="mobile 1"
        value={phone}
        setValue={setPhone}
      />
      <PhoneInput
        title="Mobile 2"
        placeholder="mobile 2"
        value={phone}
        setValue={setPhone}
      />

      <Breaker title="ACCOUNT CREDENTIALS" />

      <InputBox
        title="Email"
        placeholder="Email"
        keyboardType="email-address"
        autoComplete="email"
        value={email}
        setValue={setEmail}
      />
      <InputBox
        title="Password"
        placeholder=" Set Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <Buttons
        btnName={loading ? "Please wait.." : "Register"}
        handleSubmit={handleSubmit}
      />
     <View style={{marginBottom : scale(20)}}>
     <Text style={{ textAlign: "center" }}>
        Already Registered?
        <Text
          style={{ fontWeight: "800", color: "#0077b6" }}
          onPress={() => navigation.navigate("login")}
        >
          Login
        </Text>
      </Text>
     </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#bde0fe",
  },
});

export default Register;
