import React from 'react'
import {View} from 'react-native'
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'


export default class ListagemClientes extends React.Component{
    render(){
        return(
            <View>
                <StatusBar corFundo='red'/>
                <Header titulo = 'Listagem de Clientes'/>
            </View>
        )
    }
} 