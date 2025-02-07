import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import {api} from "@/api/api"

const SignUp = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName : "",
    mobile : "",
    state : "",
    city : "",
    district : "",
    pincode : "",
    email : "",
    password : "",
    meterId : "",
    connectionType : "",
    location : "",
    contactNo : "",
    em1 : "",
    em2 : ""
  });

  const handleRegister = async () => {
    try {
      const response = await api.post("/register", JSON.stringify(formData),{
        headers: { "Content-Type": "application/json" },
      }); // Call API
      Alert.alert("Success", "Registered successfully!");
      navigation.navigate("LoginScreen"); // Redirect to Login
    } catch (error) {
      Alert.alert("Error", error.response?.data?.message || "Registration failed");
    }
  };
  return (
    <ScrollView>
      <View>
        <Text style={styles.signUp}>Sign Up</Text>

        <View style={styles.AuthContainer}>
          <View style={styles.breaker}>
            <Text style={styles.breakerText}>PERSONAL DETAILS</Text>
          </View>

          <Text style={styles.label}> Full Name</Text>
          <View style={styles.textField}>
            <TextInput placeholder="Enter Full Name"
            value={formData.fullName}
            onChangeText={(text)=>setFormData({...formData, fullName : text})} />
          </View>

          <Text style={styles.label}> Mobile Number</Text>
          <View style={styles.textField}>
            <TextInput
              placeholder="Enter Mobile Number"
              maxLength={10}
              keyboardType="numeric"
              value={formData.mobile}
              onChangeText={(text)=>setFormData({...formData, mobile : text})}
            />
          </View>

          <Text style={styles.label}>State</Text>
          <View style={styles.textField}>
            <TextInput placeholder="Enter State" 
            value={formData.state}
            onChangeText={(text)=>setFormData({...formData, state : text})}/>
          </View>

          <Text style={styles.label}>City</Text>
          <View style={styles.textField}>
            <TextInput placeholder="Enter City" 
            value={formData.city}
            onChangeText={(text)=>setFormData({...formData, city : text})}/>
          </View>

          <Text style={styles.label}>District</Text>
          <View style={styles.textField}>
            <TextInput placeholder="Enter District"
            value={formData.district}
            onChangeText={(text)=>setFormData({...formData, district : text})} />
          </View>

          <Text style={styles.label}>Pin Code</Text>
          <View style={styles.textField}>
            <TextInput placeholder="Enter Pin Code" maxLength={6}
            value={formData.pincode}
            onChangeText={(text)=>setFormData({...formData, pincode : text})} />
          </View>

          <Text style={styles.label}> Email Id</Text>
          <View style={styles.textField}>
            <TextInput placeholder="Enter Email Id" 
            value={formData.email}
            onChangeText={(text)=>setFormData({...formData, email : text})}/>
          </View>

          <Text style={styles.label}> Password</Text>
          <View style={styles.textField}>
            <TextInput placeholder="Create password " maxLength={8}
            value={formData.password}
            onChangeText={(text)=>setFormData({...formData, password : text})}
            secureTextEntry />
          </View>

          <View style={styles.breaker}>
            <Text style={styles.breakerText}>METER DETAILS</Text>
          </View>

          <Text style={styles.label}> Meter Id</Text>
          <View style={styles.textField}>
            <TextInput placeholder="Enter Meter Id"
            value={formData.meterId}
            onChangeText={(text)=>setFormData({...formData, meterId : text})} />
          </View>

          <Text style={styles.label}> Connection Type</Text>
          <View style={styles.textField}>
            <TextInput placeholder="Connection Type" 
            value={formData.connectionType}
            onChangeText={(text)=>setFormData({...formData, connectionType : text})}/>
          </View>

          <View style={styles.breaker}>
            <Text style={styles.breakerText}>NEAREST FIRESTATION</Text>
          </View>

          <Text style={styles.label}> Location</Text>
          <View style={styles.textField}>
            <TextInput placeholder="Fire Station Location"
            value={formData.location}
            onChangeText={(text)=>setFormData({...formData, location : text})} />
          </View>

          <Text style={styles.label}> Contact Number</Text>
          <View style={styles.textField}>
            <TextInput placeholder="Contact Number"
            value={formData.contactNo}
            onChangeText={(text)=>setFormData({...formData, contactNo : text})} />
          </View>

          <View style={styles.breaker}>
            <Text style={styles.breakerText}>EMERGENCY CONTACTS</Text>
          </View>

          <Text style={styles.label}> Phone Number 1</Text>
          <View style={styles.textField}>
            <TextInput
              placeholder="Enter Emergency Contact 1"
              maxLength={10}
              keyboardType="numeric"
              value={formData.em1}
              onChangeText={(text)=>setFormData({...formData, em1 : text})}
            />
          </View>

          <Text style={styles.label}>Phone Number 2</Text>
          <View style={styles.textField}>
            <TextInput
              placeholder="Enter Emergency Contact 2"
              maxLength={10}
              keyboardType="numeric"
              value={formData.em2}
              onChangeText={(text)=>setFormData({...formData, em2 : text})}
            />
          </View>

          <TouchableOpacity style={styles.btn} onPress={handleRegister}>
            <Text style={styles.breakerText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.blwBtnTxt}>
            Already have an account?
            <Text
              style={{ fontWeight: "800", color: "#219ebc" }}
              onPress={() => navigation.navigate("login")}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signUp: {
    textAlign: "center",
    fontSize: scale(30),
    fontWeight: "600",
    marginVertical: scale(50),
  },
  label: {
    padding: scale(10),
    fontSize: scale(15),
    marginLeft: scale(10),
  },
  textField: {
    height: scale(40),
    width: "80%",
    padding: scale(3),
    borderWidth: 1,
    borderRadius: scale(5),
    marginHorizontal: scale(20),
    borderColor: "#219ebc",
  },
  AuthContainer: {
    height: "100%",
  },
  breaker: {
    height: scale(30),
    width: "90%",
    backgroundColor: "#219ebc",
    alignSelf: "center",
    marginVertical: scale(10),
    justifyContent: "center",
  },
  breakerText: {
    textAlign: "center",
    fontSize: scale(18),
    color: "#fff",
    fontWeight: "600",
  },
  btn: {
    height: scale(50),
    width: scale(150),
    backgroundColor: "#219ebc",
    marginVertical: scale(30),
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: scale(5),
  },
  blwBtnTxt: {
    alignSelf: "center",
    marginBottom: verticalScale(50),
  },
});
