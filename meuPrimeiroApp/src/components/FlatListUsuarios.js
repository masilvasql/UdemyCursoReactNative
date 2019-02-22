import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

export default class FlatListClientes extends React.Component {

    constructor(props) {
        super(props)
    }

    componentesLista = ({ item }) => (
        <Card 
            containerStyle={item.status == 'Inativo' ?  estilo.estiloCardInativo :       estilo.estiloCard} 
            title={item.nome}
        >
            <View style={estilo.viewInicial}>
                <Text>Idade: {item.idade}</Text>
                <Text style={item.status == 'Inativo' ? estilo.textInativo : estilo.textAtivo}>Status: {item.status}</Text>
            </View>
            <View style={estilo.viewDois}>
                <Text>Cidade: {item.cidade}</Text>
                <Text>Estado: {item.estado}</Text>
            </View>

        </Card>
    )

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={this.componentesLista}
            />
        )
    }
}

const estilo = StyleSheet.create({
    viewInicial: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewDois: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    estiloCard:{
        borderRadius:25,
        borderWidth:3,
        borderColor:'green'
    },
    estiloCardInativo:{
        borderRadius:25,
        borderWidth:3,
        borderColor:'red'
    },
    textInativo:{
        fontWeight:'bold',
        color:'red'
    },
    textAtivo:{
        fontWeight:'bold',
        color:'green'
    }
})