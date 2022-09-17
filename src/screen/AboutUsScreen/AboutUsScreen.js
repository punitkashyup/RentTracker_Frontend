import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const AboutUsScreen = () => {

  const navigation = useNavigation();

  const onBackPress = () => {
    console.log();
    console.warn("Pressed Back");
    navigation.navigate('Home');
  }

  return (
    <View style={style.root}>
      
       <View style={style.about}>
          <Text style={style.logo}>₹entTracker</Text>
          <Text style={style.aboutText}>Developed by PUNIT KUMAR with ❤️</Text>
          <Text style={style.versionText}>version 1.0.1</Text>
        </View>

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
    marginTop: 150,
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
  aboutText:{
    color: '#FFFFFF',
    fontSize: 15,
    marginLeft: 28,
  },
  versionText:{
    color: '#FFFFFF',
    fontSize: 13,
    marginLeft: 110,
    marginTop: 10,
    marginBottom: 200,
  }
  
});

export default AboutUsScreen