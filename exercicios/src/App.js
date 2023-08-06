
import React from 'react'
import { View, StyleSheet } from 'react-native'

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

import  CompPadrao, { Comp1, Comp2 } from './components/multi'
import Primeiro from './components/primeiro'

export default () => (
    <View>
        <Primeiro></Primeiro>
        <CompPadrao></CompPadrao>
        <Comp1></Comp1>
        <Comp2></Comp2>
    </View>
)
