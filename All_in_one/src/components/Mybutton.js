import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('window');
const Mybutton = ({props}) => {
  return (
<TouchableOpacity
onPress={()=>{props.onPress}}
style={{
    backgroundColor:props?.backgroundColor,
    height:props?.height,
    width:props?.width,
    alignSelf:"center",
    justifyContent:"center",
    borderRadius:props?.borderRadius

    }}
>
    <Text
    style={{
        fontSize:props?.fontSize,
        alignSelf:"center",
        fontWeight:"bold",
        color:"white"
    }}
    >
        ok 
    </Text>
</TouchableOpacity>    
  )
}

export default Mybutton

const styles = StyleSheet.create({})
// ***************************how to use**************************** 
// backgroundColor 
// height 
// width 
// alignSelf 
// justifyContent
// borderRadius,
// fontSize

// onPress