import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, TouchableHighlight} from 'react-native';


const IconButton = ({ onPress, name}) =>{
return (
    <TouchableHighlight>
      <Icon.Button name={name} underlayColor={'#2C8158'} onPress={onPress} backgroundColor="#2C8158" color='white' size={30} opacity={0.8}></Icon.Button>
    </TouchableHighlight>
  );
};


export default IconButton