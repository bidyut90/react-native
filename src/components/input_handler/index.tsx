//Get text input Value 
//  (Handling Text input )

// Make Text input and define the State.
// Apply Style in text Input
// Get Text input value OnChage . Clear The Text input Value

import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { formStyle } from './style'

const inputHanling = () => {
    return (
        <>
            <View style={{ padding: 5, backgroundColor: '#ed6809' }}>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
                </Text>
            </View>
            {/* form  */}
            <View style={formStyle.formBox}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', textAlign: 'center' }}> Register Here
                </Text>
                <TextInput style={formStyle.inputField} placeholder='Entery your Name' />
                <TextInput style={formStyle.inputField} placeholder='Entery your Email' />
                <TextInput style={formStyle.inputField} placeholder='Entery your password' secureTextEntry={true} />
                <Button title='submit' color={'green'}></Button>
            </View>
        </>
    )
}

export default inputHanling