import React, { useState,useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { getToken} from '../services/AsyncStorageService';



const MainNavigator = () => {
  return (
    <NavigationContainer>
        {token.access ? <AppStack/> : <AuthStack/> }
    </NavigationContainer>
  );
};
export default MainNavigator;