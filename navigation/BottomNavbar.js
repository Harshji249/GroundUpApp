import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home';
import Setting from '../screens/Setting'
import Profile from '../screens/Profile'
import Cart from '../screens/Cart'
import {MaterialIcons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

const iconMap={
  Home:"home", size:24,
  Setting: "settings",
  Cart:"add-shopping-cart",
  Profile: "person"
}

export const BottomNavbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = iconMap[route.name];
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        headerShown:false,
        tabBarActiveTintColor: '#4F8BFF',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 10,
        },
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      })}
    >
    <Tab.Screen name='Home' component={Home}/>
    <Tab.Screen name='Cart' component={Cart}/>
    <Tab.Screen name='Profile' component={Profile}/>
    <Tab.Screen name='Setting' component={Setting}/>

   
   </Tab.Navigator>
  )
}
