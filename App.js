import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Logo from './components/logo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  return (
    <>
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Logo"
          component={Logo}
          // options={{title: 'Welcome'}}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    {/* <Logo/> */}
    </>
    // <View style={styles.container}>
    //   <Image
    //   source= {require('./images/images/officialLogo.png')}/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

