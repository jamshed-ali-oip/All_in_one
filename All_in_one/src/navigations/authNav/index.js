import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../../screens/authScreens/LandingPage';
const AuthNav = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
    <Stack.Screen name="LandingPage" component={LandingPage} />
    </Stack.Navigator>
  )
}

export default AuthNav

