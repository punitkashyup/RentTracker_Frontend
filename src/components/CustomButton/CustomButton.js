import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]} >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 100,
        marginVertical: 10,
    },

    container_PRIMARY: {
        backgroundColor: '#5DB075',
    },

    container_TERTIARY: {

    },

    text: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFFFF',
        marginVertical: 0.5,

    },

    text_TERTIARY: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 18,
        color: 'white',
        opacity: .62,
        marginVertical: -10,

    },

});

export default CustomButton