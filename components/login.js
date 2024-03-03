import React from "react";
import { StyleSheet, Text, View, Image, Button,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

    handleLoginNumber=()=>{
        navigation.navigate('phoneLogin')
    }
    handleLoginEmail=()=>{
      navigation.navigate('emailLogin')
    }
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../images/images/officialLogo.png")} />
        <View style={styles.btnContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLoginNumber} style={{height:30,backgroundColor:'white', display:'flex', justifyContent:"center", alignItems:"center"}} >
        <Text style={{color:'#0085FF', fontWeight:'bold'}}>Login Using Number</Text>
      </TouchableOpacity>
      </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLoginEmail} style={{height:30,backgroundColor:'white', display:'flex', justifyContent:"center", alignItems:"center"}} >
        <Text style={{color:'#0085FF', fontWeight:'bold'}}>Login Using Email</Text>
      </TouchableOpacity>
          </View>
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
    backgroundColor: "#FFD134",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 200, 
    marginVertical: 8,
  },
  btnContainer: {
    marginTop: 220,
  },
  createAccount: {
    marginTop:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login;
