import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const EmailLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlePasswordChange = (text) => {
    console.log('text',text)
    setPassword(text);
  };
  const handleLogin = async () => {
    console.log(email,password)
    await axios.post('http://192.168.1.10:3000/api/auth/loginuser', {
      email:email,
      password : password
    })
    .then(async function (response) {
      console.log(response);
      if(response.status === 200){
        await AsyncStorage.setItem('authToken',response.data.authToken);
        await AsyncStorage.setItem('user',JSON.stringify(response.data.user));
      navigation.navigate('BottomNavbar')
      }
    })
    .catch(function (error) {
      console.log('error',error);
    });
  }

  const handleEmailChange =(text)=>{
    console.log('text',text)

    setEmail(text);
  }
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
            name="mail"
            size={24}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your registered mail"
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
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
            placeholder="Enter your password"
            keyboardType="visible-password"
            value={password}
            onChangeText={handlePasswordChange}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.sendOTPButton}>
            <Text style={{ fontSize: 18, color: 'black', fontWeight:'bold' }}>Login</Text>
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
