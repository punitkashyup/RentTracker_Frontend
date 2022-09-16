/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet,Text} from 'react-native';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';



const App = () => {
  // const token = false
  return (
    <SafeAreaView style={styles.root}>
      <AppStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default App;
