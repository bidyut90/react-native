import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { style } from './style'

const CustomButton = () => {
    return (
        <View>
            <TouchableHighlight style={{marginBottom:5}} >
                <Text style={[style.button1, style.primary]}>
                    submit
                </Text>
            </TouchableHighlight>

            <TouchableHighlight style={{marginBottom:5}} >
                <Text style={[style.button1, style.warning]}>
                  clear
                </Text>
            </TouchableHighlight>

            <TouchableHighlight style={{marginBottom:5}} >
                <Text style={[style.button1, style.alert]}>
                 Next
                </Text>
            </TouchableHighlight>
        </View>

    )
}

export default CustomButton



