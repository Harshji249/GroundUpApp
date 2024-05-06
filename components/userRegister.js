import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; 

const UserRegister = () => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        name:'',
        address:'',
        city:'',
        state:'',
        pincode:'',
        phone:''
    });
    const [email, setEmail] = useState(''); // Define email state variable
    const [password, setPassword] = useState('');
    
    const handleEmailChange = (text) => {
      setEmail(text); // Update email state when the text input changes
    };

    const handlePasswordChange = (text) => {
      setPassword(text);
    };

    const handleLogin = async () => {
      await axios.post('https://groundup-server.onrender.com/api/auth/registeruser', {
       formData
      })
      .then(function (response) {
        console.log(response);
        if(response.status === 200){
          navigation.navigate('BottomNavbar')
        }
      })
      .catch(function (error) {
        console.log('error',error);
      });
    };
  
    return (
      <>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require("../images/images/officialLogo2.png")} />
            <Text style={{ color: "black",  fontSize: 20, fontWeight: 'semibold' }}>Register Yourself</Text>
          </View>
  
          <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            maxLength={10}
            onChangeText={handleEmailChange}
          />
           <TouchableOpacity>
           <MaterialIcons
              name="photo"
              size={24}
              color="black"
              style={styles.icon}
            />
           </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Address"
            maxLength={10}
            onChangeText={handleEmailChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="City"
            maxLength={15}
            
          />
           <TextInput
            style={styles.input}
            placeholder="Pincode"
            maxLength={10}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="State"
            maxLength={10}
            onChangeText={handleEmailChange}
          />
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
              placeholder="Enter your mail"
              keyboardType="email-address"
              maxLength={10}
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
              placeholder="Set New password"
              keyboardType="visible-password"
              maxLength={10}
              value={password}
              onChangeText={handlePasswordChange}
            />
          </View>
  
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogin} style={styles.sendOTPButton}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight:'bold' }}>Login</Text>
            </TouchableOpacity>
          </View>
  
          {/* <View style={styles.createAccount}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Don't have an account?</Text>
            <Text style={{ color: "#0085FF", fontSize: 15, fontWeight: 'bold' }}> Create New Account</Text>
          </View> */}
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
      marginTop:20,
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

export default UserRegister;
