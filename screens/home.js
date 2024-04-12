import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { useNavigation} from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import iconSource from '../images/images/search.png';


const Home = () => {
  const width = Dimensions.get('window').width;
 

  return (
    
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../images/images/officialLogo2.png")} />
        <Text>Noida, Uttar Pradesh</Text>
        <View style={styles.inputContainer2}>
        <Image source={iconSource} style={styles.search} />
         

          <TextInput
            style={styles.input}
            placeholder="Search Ground"
            keyboardType="visible-password"
            maxLength={10}
          />
        </View>

        <View>
          <Text style={styles.text}>Popular Ground</Text>
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
    top: 60,
  },
  image:{
    width:180,
    height:44,
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
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: 330,
    marginTop:10,
    borderWidth: 2,
    borderColor: "#DFDFDF",
    borderRadius: 50,
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
  text:{
    marginRight:200,
    color:"#ABABAB",
  }
});
export default Home;
