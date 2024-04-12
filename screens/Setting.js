import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground , Image } from 'react-native';
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const Setting = ({ navigation }) => {
  const goToMyBooking = () => {
    navigation.navigate('Cart');
  };
  const goToHome = () => {
    navigation.navigate('Home');
  };
  const goToLanguage = () => {
    navigation.navigate('Language');
  };

  const goToPersonalInfo = () => {
    navigation.navigate('PersonalInfo');
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.container2}>

<MaterialIcons name="arrow-back"
  size={24}
  color="black"
  onPress={goToHome} />
<Image style={styles.image} source={require("../images/images/officialLogo2.png")} />
</View>
        <TouchableOpacity onPress={goToPersonalInfo} style={styles.option}>
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToMyBooking} style={styles.option}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToLanguage} style={styles.option}>
          <Text style={styles.optionText}>Security and Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.logOut}>Log Out</Text>
        </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    top:100,
  },
  container2: {
    gap: 50,
    flexDirection: "row",
    alignItems: "center",
    width: 330,
    marginTop: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
   
  },
  image: {
    width: 180,
    height: 44,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  option: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 15,
    width: '80%',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logOut:{
    fontSize: 16,
    fontWeight: 'bold',
    color:"red",
  },
});

export default Setting;

