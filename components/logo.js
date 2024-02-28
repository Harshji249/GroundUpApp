import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
const logo = () => {
  return (
    <View style={styles.container}>
      <Image
      source= {require('../images/images/officialLogo.png')}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFD134',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default logo
