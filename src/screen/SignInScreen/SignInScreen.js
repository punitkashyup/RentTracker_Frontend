import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {
  
  const {control, handleSubmit} = useForm ();

  const navigation = useNavigation();

  const onLogInPress = (data) => {
    console.log(data);
    console.warn("Log in");
    // Validate User

    // navigation.navigate('Home');
  }
  const onSignUpPress = (data) => {
    console.log(data);
    console.warn("Sign Up");
    // Register  User
    navigation.navigate('SignUp');
  }
  const onForgotPasswordPress = (data) => {
    console.log(data);
    console.warn("Forgot Password");
    // Register  User
    navigation.navigate('ForgotPasssword');
  }

  return (
    <View style={style.root}>
      <Text style={style.welcome_text}>Welcome</Text>

      <Text style={style.logo}>₹entTracker</Text>

      <CustomInput 
        name = "username"
        placeholder="Username" 
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