import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import CartInfo from './Cart-information';

const Cart = ({ navigation }) => {
  

  const goToHome = () => {
    navigation.navigate('Home');
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
      <CartInfo/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 60,
  },
  container2: {
    gap: 50,
    flexDirection: "row",
    alignItems: "center",
    width: 330,
    marginTop: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  image: {
    width: 180,
    height: 44,
  },
  
});
export default Cart;
