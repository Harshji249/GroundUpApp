import React, {useState}from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { RecaptchaVerifier } from "firebase/auth";
import auth from "../config/firebase-config";
const PhoneLogin = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');

  const configureCaptcha = () => {
    console.log('inside', auth);
    const recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
    }, auth);
    console.log(recaptchaVerifier,'recaptchaVerifier')
    return recaptchaVerifier
  };
  
  const handleMobileNumberChange = (text) => {
    // Remove non-numeric characters
    const formattedText = text.replace(/[^\d]/g, '');
    setPhone(formattedText);
  };
  
  const handleSendOTP = async () => {
    const phoneNumber = '+91' + phone;
    const appVerifier = configureCaptcha();
    console.log('app',appVerifier)
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      console.log(confirmationResult, 'confirmationResult');
      window.confirmationResult = confirmationResult;
    } catch (error) {
      // Error; SMS not sent
      console.error(error);
    }
  };
  

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../images/images/officialLogo2.png")} />
          <Text style={{ color: "#E0AD00", fontSize: 30, fontWeight: 'bold' }}>Welcome Back</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require("../images/images/welcomeBack.png")} />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons
            name="phone"
            size={24}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            keyboardType="numeric"
            maxLength={10}
            value={phone}
        onChangeText={handleMobileNumberChange}
          />
        </View>

        <View style={styles.buttonContainer}>
        <View id="sign-in-button"></View>
          <TouchableOpacity onPress={handleSendOTP} style={styles.sendOTPButton}>
            <Text onPress={handleSendOTP} style={{ fontSize: 18, color: 'white' }}>Send OTP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.createAccount}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Don't have an account?</Text>
          <Text style={{ color: "#0085FF", fontSize: 15, fontWeight: 'bold' }}> Create New Account</Text>
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
    backgroundColor: '#0085FF',
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

export default PhoneLogin;
