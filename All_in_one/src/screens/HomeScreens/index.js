import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
      onPress={()=>{navigation.navigate("SettingScreen")}}
      >
      <Text>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})