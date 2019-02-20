import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatusBar from './src/components/StatusBar'

export default class App extends React.Component {
  render() {
    return (
      <View >
        <StatusBar corFundo='blue'/>
        <Text>Hello World!</Text>
        <Text>Marcelo!</Text>
      </View>
    );
  }
}

