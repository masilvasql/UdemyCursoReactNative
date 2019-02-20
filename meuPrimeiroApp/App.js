import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatusBar from './src/components/StatusBar'
import Header from './src/components/Header'

export default class App extends React.Component {
  render() {
    return (
      <View >
        <StatusBar corFundo='blue'/>
        <Header titulo='Menu Principal'/>
        <Text>Hello World!</Text>
        <Text>Marcelo!</Text>
      </View>
    );
  }
}

