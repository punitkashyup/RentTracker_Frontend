/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet,Text} from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./src/store"

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';



const App = () => {
  // const token = false
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <AuthStack />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default App;
