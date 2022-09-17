import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import HomeScreen from '../screen/HomeScreen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen/ProfileScreen';
import AboutUsScreen from '../screen/AboutUsScreen';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;

