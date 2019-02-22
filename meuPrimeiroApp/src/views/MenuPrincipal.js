import React from 'react'
import { StyleSheet, Text, View, Button as ButtonRn } from 'react-native';
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import { Actions } from 'react-native-router-flux'
import { Button } from 'native-base'

export default class MenuPrincipal extends React.Component {

    constructor() {
        super()
        this.state = {
            mostrar: false,
            texto: 'OLHA EU AQUI'
        }
    }


    render() {
        return (
            <View style={estilo.viewPrincipal}>
                <StatusBar corFundo='blue' />
                <Header titulo='Menu Principal' />
                <View>
                    
                    <Text>Hello World!</Text>
                    <Text>Marcelo!</Text>
                    <Button full rounded onPress={() => Actions.listagemClientes()} danger>
                        <Text style={estilo.textBtn}>Navegar para outra tela</Text>
                    </Button>

                    <Button full success onPress={() => this.setState({ mostrar: true })}>
                        <Text>Mostrar</Text>
                    </Button>
                    <Button full warning onPress={() => this.setState({ mostrar: false })}>
                        <Text>Ocultar</Text>
                    </Button>
                    <Text>{
                        this.state.mostrar
                            ?
                            this.state.texto
                            :
                            null

                    }</Text>
                </View>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
    },
    textBtn: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    }

})