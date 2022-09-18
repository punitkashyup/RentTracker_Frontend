import { View, Text, StyleSheet } from 'react-native'
import React, { useState,useEffect } from 'react'
import CustomButton from '../../components/CustomButton';
import IconButton from '../../components/IconButton/IconButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import { getToken, removeToken} from '../../services/AsyncStorageService';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {

  const {control, handleSubmit} = useForm ();
  const navigation = useNavigation();

  const myData = useSelector(state => state.user)

  const onEditProfilePress =() => {
    console.log();
    console.warn("EditProfile Pressed");
  }

  const onBackPress = () => {
    console.log();
    console.warn("Back Pressed");
    navigation.navigate('Home');
  }
  const onSettingIconPress = () => {
    console.log();
    console.warn("Setting Pressed");
    navigation.navigate('AboutUsScreen');
  }
  const onSignoutIconPress = async () => {
    await removeToken()
    console.warn("Signout Pressed");
  }
  
  return (
    <View style={style.root}>
      
      <View style={style.navbar}>
        <IconButton name= "cog" onPress={onSettingIconPress}/>
        <Text style={style.logo}>Profile</Text>
        <IconButton name= "sign-out-alt" onPress={onSignoutIconPress}/>
      </View>
      <View style={style.dashboard}>
        <View style={[style.topview,style.border]}>
            <IconButton name= "grin" onPress={onSettingIconPress}/>
            <Text style={style.DashboardText}>{myData.name}</Text>
        </View>
        <View style={[style.topview,style.border]}>
            <IconButton name= "at" onPress={onSettingIconPress}/>
            <Text style={style.DashboardText}>{myData.email}</Text>
        </View>
        <View style={[style.topview,style.border]}>
            <IconButton name= "cog" onPress={onSettingIconPress}/>
            <Text style={style.DashboardText}>+91 7903424671</Text>
        </View>
      </View>

      <CustomButton text="Edit Profile" onPress={onEditProfilePress}/>
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
  logo: {
    marginTop: 1,
    marginBottom: 15,
    marginLeft: 80,
    marginRight: 80,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
  },
  dashboard: {
    flex: 1,
  },
  topview:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '15%',
    alignItems: 'center',
  },
  bottomview:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '50%',
    alignItems: 'center'
  },
  DashboardText:{
    fontSize: 16,
    fontFamily: 'Inter',
    color: '#FFFFFF',
    fontWeight: 'bold',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.10)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
  },
  navbar:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
  
});

export default ProfileScreen