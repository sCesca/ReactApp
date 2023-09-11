
import
{
    Text
} from 'react-native'

export default (props) => {
    // as props é uma propriedade apenas de leitura
    console.warn(props)

    // desestruturando a props
    let { min, Max } = props;
    min = 1
    Max = 2

    function calc_num() 
    {
        return parseInt(Math.random()  * (props.max > props.min ? props.max : props.min) - (props.max > props.min ? props.min : props.max))+ (props.max > props.min ? props.min : props.max)
    }

    return (
        <Text>
            Valor aleatório entre {props.min < props.max ? props.min : props.max} e {props.max > props.min ? props.max : props.min}: {calc_num()}
        </Text>
    )
}