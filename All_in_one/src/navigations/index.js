import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './authNav';
import AppNav from './appNav';


const MainNav = () => {
    const [Side,setSide]=useState(true)
  return (
    <NavigationContainer>
       {Side==true?<AppNav/>:<AuthNav/>}
    </NavigationContainer>
  )
}

export default MainNav

