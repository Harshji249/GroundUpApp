import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Logo from './components/logo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/login';
import PhoneLogin from './components/phoneLogin';
import Otpscreen from './components/otpscreen';
import EmailLogin from './components/emailLogin';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Logo"
          component={Logo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="phoneLogin"
          component={PhoneLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="otpScreen"
          component={Otpscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="emailLogin"
          component={EmailLogin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

