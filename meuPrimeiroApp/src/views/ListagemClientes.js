import React from 'react'
import {View, StyleSheet} from 'react-native'
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import FlatListClientes from '../components/FlatListUsuarios'


export default class ListagemClientes extends React.Component{

    constructor(){
        super()

        this.state = {
            dadosUsuario:[
                {
                    nome:'Marcelo Abrão da Silva',
                    idade:27,
                    status:'Ativo',
                    cidade:'Videira',
                    estado:'SC'
                },
                {
                    nome:'José CAetano Veloso',
                    idade:20,
                    status:'Inativo',
                    cidade:'Caçador',
                    estado:'SC'
                },
                {
                    nome:'Mr. Shadows',
                    idade:30,
                    status:'Ativo',
                    cidade:'Lebon Régis',
                    estado:'SC'
                },
                {
                    nome:'Maria Raimunda',
                    idade:18,
                    status:'Inativo',
                    cidade:'Curitba',
                    estado:'PR'
                },
                {
                    nome:'Matheus',
                    idade:19,
                    status:'Ativo',
                    cidade:'Curitba',
                    estado:'PR'
                },
                {
                    nome:'Tereza',
                    idade:19,
                    status:'Ativo',
                    cidade:'Curitba',
                    estado:'PR'
                }
            ]
        }
    }

    render(){
        return(
            <View style={estilo.ViewPrincipal}>
                <StatusBar corFundo='red'/>
                <Header titulo = 'Listagem de Clientes'/>
                <FlatListClientes data = {this.state.dadosUsuario}/>
            </View>
        )
    }
} 

const estilo = StyleSheet.create({
    ViewPrincipal:{
        flex:1
    }
})