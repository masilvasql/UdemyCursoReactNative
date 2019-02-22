import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import {Actions} from 'react-native-router-flux' 


export default class MenuPrincipal extends React.Component {
    render() {
        return (
            <View >
                <StatusBar corFundo='blue' />
                <Header titulo='Menu Principal' />
                <Text>Hello World!</Text>
                <Text>Marcelo!</Text>
                <Button title='Navegar para outra tela' onPress={()=> Actions.listagemClientes()}/>
            </View>
        )
    }
}