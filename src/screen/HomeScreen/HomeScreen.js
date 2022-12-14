import { View, Text, StyleSheet } from 'react-native'
import React, { useState,useEffect } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import IconButton from '../../components/IconButton/IconButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import { getToken } from '../../services/AsyncStorageService';
import {useGetLoggedUserQuery} from '../../services/userAuthApi'
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../features/userSlice';

const HomeScreen = () => {

  const {control, handleSubmit} = useForm ();

  const navigation = useNavigation();

  const [token, setToken] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const token = await getToken()
      if (token) {
        const { access, refresh } = JSON.parse(token)
        setToken({
          "access": access,
          "refresh": refresh
        })
      }
    })();
  }, [])

  const { data,isSuccess} = useGetLoggedUserQuery(token.access)
  useEffect(()=>{
    if(isSuccess){
      dispatch(setUserInfo({email:data.email, name:data.name}))
    }
  })

  const onSubmitPress = (data) => {
    console.log(data);
    console.warn("Submit Sucessfully");
  }
  const onViewReportPress = () => {
    console.log();
    console.warn("View Report");
  }
  const onProfileIconPress = () => {
    console.log();
    console.warn("Profile Pressed");
    navigation.navigate('ProfileScreen');
  }
  const onSignoutIconPress = () => {
    console.log();
    console.warn("Signout Pressed");
    // navigation.navigate('');
  }

  return (
    <View style={style.root}>
      
       <View style={style.navbar}>
          <IconButton name= "user-alt" onPress={onProfileIconPress}/>
          <Text style={style.logo}>₹entTracker</Text>
          <IconButton name= "calendar-alt" onPress={onSignoutIconPress}/>
        </View>

      <View style={style.dashboard}>
        <View style={[style.topview,style.border]}>
            <Text style={style.DashboardText} >Years</Text>
            <Text style={style.DashboardText}>Month</Text>
            <Text style={style.DashboardText}>Total Spend</Text>
        </View>
        <View style={style.bottomview}>
          <Text style={style.DashboardText} >1 yrs</Text>
          <Text style={style.DashboardText} >3 month</Text>
          <Text style={style.DashboardText} >210,500 ₹</Text>
        </View>
      </View>
      

      <CustomInput 
      name = "rentofmonth"
      placeholder="RentOfMonth" 
      control={control}
      />

      <CustomInput 
      name = "rentamount"
      placeholder="rentAmount" 
      control={control}
      />

      <CustomInput
      name = "electricbill" 
      placeholder="electricBill" 
      control={control}
      />

      <CustomInput 
      name = "otheramount"
      placeholder="otherAmount" 
      control={control}
      />

      <CustomButton text="Submit" onPress={handleSubmit(onSubmitPress)}/>
      <CustomButton text="View Report" onPress={onViewReportPress}/>
      

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
    marginTop: -8,
    marginBottom: 15,
    marginLeft: 40,
    marginRight: 40,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 40,
    color: '#FFFFFF',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
  },
  dashboard: {
    flex: 1,
    width: '100%',
    height: '18%',
    marginTop: 10,
    marginBottom: 8,
    zIndex: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    
  },
  topview:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '50%',
    alignItems: 'center',
    marginTop: -5,
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
    color: '#2C8158',
    fontWeight: 'bold',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.10)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
  },
  border:{
    borderStyle: 'dashed',
    borderBottomColor: 'black',
    borderBottomWidth: 1.4,
    marginTop: -10,
    marginBottom: 5,
  },
  navbar:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
  
});

export default HomeScreen