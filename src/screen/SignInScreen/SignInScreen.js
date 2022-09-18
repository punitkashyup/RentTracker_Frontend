import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState,useEffect } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import { useLoginUserMutation } from '../../services/userAuthApi';
import { storeToken } from '../../services/AsyncStorageService';


const SignInScreen = () => {
  
  const {control, handleSubmit} = useForm ();

  const navigation = useNavigation();
  const [loginUser] =useLoginUserMutation()

  const onLogInPress = async(data) => {
    console.log(data);
    console.warn("Log in");
    // Validate User
    const res = await loginUser (data)
    if(res.data){
      console.log("Response Data",res.data);
      await storeToken(res.data.token)
    }
    if(res.error){
      console.warn("Response Error",res.error.data.errors.non_field_errors);

    } 
  }
  const onSignUpPress = () => {
    console.warn("Sign Up");
    // Register  User
    navigation.navigate('SignUp');
  }
  const onForgotPasswordPress = () => {
    console.warn("Forgot Password");
    navigation.navigate('ForgotPasssword');
  }

  return (
    <View style={style.root}>
      <Text style={style.welcome_text}>Welcome</Text>

      <Text style={style.logo}>₹entTracker</Text>

      <CustomInput 
        name = "email"
        placeholder="Email" 
        control={control}
      />
      <CustomInput 
        name = "password"
        placeholder="Password"
        control={control}
        secureTextEntry={true}
      />

      <CustomButton text="Log In" onPress={handleSubmit(onLogInPress)} />
      <CustomButton text="Sign Up" onPress={handleSubmit(onSignUpPress)}/>

      <CustomButton text="Forgot password?" onPress={handleSubmit(onForgotPasswordPress)} type="TERTIARY"/>

    </View>
  );
};

const style = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#2C8158',
    alignItems: 'center',
    padding: 20,
  },
  welcome_text: {
    marginTop: 45,
    marginBottom: 15,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
    
  },
  logo: {
    marginTop: 10,
    marginBottom: 30,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 40,
    color: '#FFFFFF',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
    
  },
});

export default SignInScreen