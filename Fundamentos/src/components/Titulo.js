
import * as React from 'react'

import
{
    Text
} from 'react-native'

export default props => {
    return (
        // possibilita o retorno de duas tags text em vez de utilizar uma view
        // <> </> poderia ser utilizado também
        <React.Fragment> 
            <Text>
                {props.principal}
            </Text>

            <Text>
                {props.secundario}
            </Text>
        </React.Fragment>
    )
}