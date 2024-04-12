import React,{useState} from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput';

const OtpScreen = () => {
  const navigation = useNavigation();

  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);

  const handleOTPInput = (value, index) => {
    const newOtpDigits = [...otpDigits];
    if (value === '' && index >= 0) {
      newOtpDigits[index] = '';
      for (let i = index - 1; i >= 0; i--) {
        newOtpDigits[i] = '';
      }
    } else {
      newOtpDigits[index] = value;
    }
    setOtpDigits(newOtpDigits);
  };
  const handleSubmit=()=>{
    if(otpDigits.map(String).join('') === '1111'){
    navigation.navigate('BottomNavbar') 
    }
  }

  const otpValue = otpDigits.join('');

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
  <OTPTextInput handleCellTextChange={handleOTPInput} />
  <Text style={{color:'#0085FF', fontWeight:'bold',marginTop:10, marginLeft:60}}>Request OTP again</Text>
</View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity  style={styles.sendOTPButton}>
            <Text onPress={handleSubmit} style={{ fontSize: 18, color: 'black', fontWeight:'bold' }}>Login</Text>
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

export default OtpScreen;
