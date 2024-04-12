import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';


const Profile = ({ navigation }) => {
  const goToMyBooking = () => {
    navigation.navigate('Cart');
  };
  
  const goToLanguage = () => {
    navigation.navigate('Language');
  };

  const goToPersonalInfo = () => {
    navigation.navigate('PersonalInfo');
  };



  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/images/bg.png')} style={styles.backgroundImage}>
      
        <View style={styles.profileContainer}>
          <Image source={require('../images/images/Profile.png')} style={styles.profileImage} />

        </View>
        <TouchableOpacity onPress={goToPersonalInfo} style={styles.option}>
          <Text style={styles.optionText}>Personal Information</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToMyBooking} style={styles.option}>
          <Text style={styles.optionText}>My Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToLanguage} style={styles.option}>
          <Text style={styles.optionText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.logOut}>Log Out</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
 
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
  logOut: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "red",
  },
});

export default Profile;

