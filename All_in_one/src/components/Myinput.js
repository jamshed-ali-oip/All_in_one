import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
const { height, width } = Dimensions.get('window');
const Myinput = ({ props }) => {

  return (

    <View
      style={{
        height: props?.height,
        // backgroundColor: "red",

        width: props?.width,
        alignSelf: 'center',
        borderRadius: props?.borderRadius,
        borderWidth: 1
      }}
    >
      <TextInput
        style={{
          height: props?.height,
          width: props?.width,
          fontSize: width * 0.035,
          borderRadius: props?.borderRadius,
          paddingLeft: width * 0.032
        }}
        placeholder={props?.placeholder}
        maxLength={props?.maxLength}
        secureTextEntry={props?.secureTextEntry}
        onChangeText={props?.onChangeText}
        value={props?.value}
        keyboardType={props?.keyboardType}
        placeholderTextColor={props?.placeholderTextColor}

      />
    </View>

  )
}

export default Myinput

const styles = StyleSheet.create({


  label: {
    marginLeft: width * 0.12,
    fontSize: width * 0.032,
    fontWeight: "500",
    color: "black",
    marginBottom: height * 0.005,

  }
})
// *************************/ things to use ************************************
// ******style*******
// height
// width
// borderRadius

// *******input****************
// placeholder
// maxLength
// secureTextEntry
// onChangeText
// value
// keyboardType
// placeholderTextColor