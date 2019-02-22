
import React from 'react'
import {Router, Stack, Scene } from 'react-native-router-flux'
import MenuPrincipal from './views/MenuPrincipal'
import ListagemClientes from './views/ListagemClientes'

const Rotas = ()=>(
    <Router>
        <Stack hideNavBar={true}>
            <Scene key='menuPrincipal' component={MenuPrincipal} initial headerMode='none'/>
            <Scene key ='listagemClientes' component={ListagemClientes} headerMode='none'/>
        </Stack>
    </Router>
)

export default Rotas