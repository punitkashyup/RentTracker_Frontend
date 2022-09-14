import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ForgotPasswordScreen = () => {
    
  const {control, handleSubmit} = useForm ();

  const navigation = useNavigation();

  const onSubmitPress = (data) => {
    console.log(data);
    console.warn("Log in");
    // Validate User

    // navigation.navigate('Home');
  }
  const onBackPress = () => {
    console.warn("Log in");
    // Validate User
    navigation.navigate('SignIn');
  }

  return (
    <View style={style.root}>
      <Text style={style.logo}>₹entTracker</Text>
      <MaterialCommunityIcons name="key" backgroundColor="#2C8158" color='white' size={120} opacity={0.8}/>
      <Text style={style.forgotPassword}>Forgot your password ?</Text>
      <Text style={style.forgotPassword_text}>Enter your email address to retrieve your password</Text>
      <CustomInput 
        name = "forgotPassword"
        placeholder="Email ID" 
        control={control}
      />
      <CustomButton text="Submit" onPress={handleSubmit(onSubmitPress)}/>
      <CustomButton text="Back" onPress={onBackPress}/>
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
  forgotPassword: {
    marginTop: 5,
    marginBottom: 15,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFFFFF',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
    
  },
  forgotPassword_text:{
    marginTop: 25,
    marginBottom: 5,
    fontFamily: 'Inter',
    fontSize: 15,
    color: '#FFFFFF',
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

export default ForgotPasswordScreen