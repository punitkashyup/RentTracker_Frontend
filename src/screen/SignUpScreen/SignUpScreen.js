import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {useRegisterUserMutation} from '../../services/userAuthApi';
const SignUpScreen = () => {
  const {control, handleSubmit} = useForm ();

  const navigation = useNavigation();

  const [registerUser] = useRegisterUserMutation()

  const onSubmitPress = async (data) => {
    const res = await registerUser (data)
    console.log(data);
    if(res.data){
      console.log("Response Data",res.data);
      navigation.navigate('SignIn');
    }
    if(res.error){
      console.log("Response Error",res.error.data.errors);

    }
    // console.warn("Submit Sucessfully");
  }
  
  const onLogInPress = (data) => {
    console.log(data);
    console.warn("Log in");
    navigation.navigate('SignIn');
  }

  return (
    <View style={style.root}>

      <Text style={style.logo}>₹entTracker</Text>

      <CustomInput 
      name = "name"
      placeholder="Name"
      control={control}
      />

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

      <CustomInput 
      name = "password2"
      placeholder="Confirm Password"
      control={control}
      secureTextEntry={true}
      />

      <CustomButton text="Submit" onPress={handleSubmit(onSubmitPress)}/>
      <CustomButton text="Log In" onPress={handleSubmit(onLogInPress)}/>
      

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
  logo: {
    marginTop: 30,
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

export default SignUpScreen