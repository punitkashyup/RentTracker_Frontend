import React from 'react';
import { View,TextInput, StyleSheet } from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const CustomInput = ({control, name, placeholder, secureTextEntry }) => {
  return (
    <View style={Styles.container}>
      <Controller 
      control={control} 
      name={name} 
      render={({field: {value, onChange, onBlur}}) => (
          <TextInput 
            value={value}
            onChangeText={onChange} 
            onBlur={onBlur}  
            placeholder={placeholder} 
            style={Styles.input} 
            secureTextEntry={secureTextEntry} 
          />
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
  },
  input: {},
})

export default CustomInput