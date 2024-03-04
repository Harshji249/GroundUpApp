import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();

  
  const handleSignup = () => {
    navigation.navigate('SignupScreen'); 
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleSignupEmail = () => {
    navigation.navigate('SignupEmail');
  };
  const handleSignupNumber = () => {
    navigation.navigate('SignupNumber');
  };


  return (
    <View style={styles.container}>
      <Image source={require("../images/images/officialLogo2.png")} />
      <View style={styles.imageContainer}>
          <Image source={require("../images/images/welcomeback2.png")} />
        </View>
      <View style={styles.btnContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignupNumber} style={styles.button}>
            <Text style={styles.buttonText}>Create Account Using Number</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignupEmail} style={styles.button}>
            <Text style={styles.buttonText}>Create Account Using Email</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.createAccount}>
        <Text style={{ fontSize: 15, fontWeight: 'bold'}}>Already have an account?Creare One</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={{ color: "#0085FF", fontSize: 16, fontWeight: 'bold' }}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginBottom: 10,
    marginTop:60,
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 250,
    height:45, 
    marginTop:0,
    marginVertical: 15,
    borderWidth:0.5,
    borderColor:"#DFDFDF",   
  },
  button: {
    height: 30,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: '#0085FF',
    fontWeight: 'bold',
    marginTop:10,
  },
  btnContainer: {
    marginTop: 80,
  },
  createAccount: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Signup;
