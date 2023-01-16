import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreens';
import SettingScreen from '../../screens/SettingScreens';
import Profile from '../../screens/Profile';
const AppNav = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

// tabnavigation code here 
  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="SettingScreen" component={SettingScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }
  return (
    // stackbnavigationcodeher
    <Stack.Navigator>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  )
}


export default AppNav

