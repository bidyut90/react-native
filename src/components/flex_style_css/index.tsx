import React from 'react'
import { View, Text } from 'react-native'

type Props = {}

const FlexStyle = (props: Props) => {
    return (
        <>
            {/* <Text style={{ fontSize: 20, color: 'red', textAlign: 'center' }}>
                Flex Style sheet
            </Text> */}
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <View style={{ flex: 1, backgroundColor: 'red' }}>
                </View>
                <View style={{ flex: 1, backgroundColor: 'blue' }}>
                </View>
            </View>

        </>
    )
}

export default FlexStyle