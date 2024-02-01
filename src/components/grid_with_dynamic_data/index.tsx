import React from 'react'
import { View, Text } from 'react-native'
import { style } from './style'

const GridWithDyamic = () => {
    return (
        <View>
            <Text style={style.header}>
                Grid with Dynamic Data
            </Text>
            <View style={style.outerContainer}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={style.gridBox}>I love you</Text>
                    <Text style={style.gridBox}>I love you</Text>
                    <Text style={style.gridBox}>I love you</Text>
                    <Text style={style.gridBox}>I love you</Text>
                    <Text style={style.gridBox}>I love you</Text>
                </View>
            </View>
        </View>
    )
}

export default GridWithDyamic