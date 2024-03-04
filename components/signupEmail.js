import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const EmailLogin = () => {
  const navigation = useNavigation();

  const handleSendOTP = () => {
    navigation.navigate('otpScreen') 
  }
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../images/images/officialLogo2.png")} />
          
        </View>

        <View style={styles.imageContainer}>
          <Image source={require("../images/images/welcomeBack.png")} />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons
            name="mail"
            size={24}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your registered mail"
            keyboardType="email-address"
            maxLength={10}
          />
        </View>
        <View style={styles.inputContainer2}>
          <MaterialIcons
            name="lock"
            size={24}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Set your new password"
            keyboardType="visible-password"
            maxLength={10}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSendOTP} style={styles.sendOTPButton}>
            <Text style={{ fontSize: 18, color: 'black', fontWeight:'bold' }}>Signup</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.createAccount}>
        <Text style={{ fontSize: 15, fontWeight: 'bold'}}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={{ color: "#0085FF", fontSize: 15, fontWeight: 'bold' }}> Login</Text>
        </TouchableOpacity>
      </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width:250,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width:250,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 100,
    marginVertical: 8,
  },
  sendOTPButton: {
    backgroundColor:'#FFC500',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  createAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EmailLogin;
