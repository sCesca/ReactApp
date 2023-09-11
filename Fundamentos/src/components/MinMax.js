import * as React from 'react'

import { StyleSheet } from 'react-native'

import 
{
    SafeAreaView,
    Text
} from 'react-native'

export default props => {
    console.warn(props)
    return (
        <SafeAreaView>
            <Text style={styles.text}>
                O valor {props.max > props.min ? props.max : props.min} é maior que o valor {props.max > props.min ? props.min : props.max}
            </Text>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 32
    }
})