
import React from 'react'

import { SafeAreaView, StyleSheet } from 'react-native'

import Aleatorio from './components/Aleatorio'

import MinMax from './components/MinMax'

/*
function App() {
    return <Text>oi</Text>
}

export default App

--------------------------
const App = function () {
    return <Text>oi</Text>
}

export default App
--------------------------

export default function () {
    return <Text>oi</Text>
}
--------------------------

export default () => {
    return <text>Olá, primeiro componente!!</text>
}
*/

import  CompPadrao, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro'

import Titulo from './components/Titulo'

export default () => (
    <SafeAreaView style={styles.Box}>
        {/*
            <Primeiro></Primeiro>
            <CompPadrao></CompPadrao>
            <Comp1></Comp1>
            <Comp2></Comp2> 
        */}

    

        {/* <Aleatorio min={0} max={1000}></Aleatorio> */}
        <Titul principal="Cadastro" secundario="Tela de cadastro"></Titul>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    Box: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4944'
    }
})
