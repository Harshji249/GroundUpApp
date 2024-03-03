import React,{ useEffect } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logo = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
    return () => clearTimeout(timer); 
  }, []);
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
  

export default Logo
