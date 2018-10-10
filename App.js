import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/Login';
import Register from './src/Register';
const { width:WIDTH} = Dimensions.get('window')

const RootStack = createStackNavigator(
  {
    Login: Login,
    Register: Register,
  },
  {
    headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
    initialRouteName: 'Login',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
