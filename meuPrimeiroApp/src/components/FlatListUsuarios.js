import React from 'react'
import {View, FlatList, Text} from 'react-native'

export default class FlatListClientes extends React.Component{

    constructor(props){
        super(props)
    }

    componentesLista = ({item})=>(
        <View>
            <Text>{item.nome}</Text>
            <Text>{item.idade}</Text>
            <Text>{item.status}</Text>
            <Text>{item.cidade}</Text>
            <Text>{item.estado}</Text>
        </View>
    )

    render(){
        return(
            <FlatList
                data={this.props.data}
                renderItem={this.componentesLista}
            />
        )
    }
}