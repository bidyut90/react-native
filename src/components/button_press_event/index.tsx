import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'


//using button and onPress Event

const ButtonPressEvent = () => {
    const [data, setData]= useState('')
    const onPressButton = (value:string) => {
            setData(value)
        console.warn(`we presed the button ${value}`)
    }
    const clearData = ()=>{
        setData('')
    }

    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 25 }}> Button and Press Event</Text>
            <Text style={{ textAlign: 'center', fontSize: 25 }}>Display Button Number:{data}</Text>
            <View style={{margin:10}}>
                
                <Button title='OnPress 20' onPress={()=>onPressButton('20')} />
                <Button title='OnPress 30' color={'green'} onPress={()=>onPressButton('30')} />   
                <Button title='clear' color={'blue'} onPress={()=>clearData()} /> 

            </View>
        </View>
    )
}

export default ButtonPressEvent