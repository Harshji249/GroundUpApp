import React from "react";
import { StyleSheet, Text, View, Image, Button,TouchableOpacity, TextInput, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {
    const width = Dimensions.get('window').width;
  const navigation = useNavigation();

    handleLoginNumber=()=>{
        navigation.navigate('phoneLogin')
    }
    handleLoginEmail=()=>{
      navigation.navigate('emailLogin')
    }
    const handleSignup = () => {
      navigation.navigate('SignupScreen'); 
    };
  
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../images/images/officialLogo2.png")} />
        <Text>Noida, Uttar Pradesh</Text>
        <View style={styles.inputContainer2}>
          <MaterialIcons
            name="lock"
            size={24}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search Ground"
            keyboardType="visible-password"
            maxLength={10}
          />
        </View>

<View>
    <Text>Popular Ground</Text>
    <View>
          
        </View>
</View>

      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
export default Home;
