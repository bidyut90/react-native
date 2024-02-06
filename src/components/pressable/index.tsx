import React from 'react'
import { Pressable, Text, View } from 'react-native'

const PrassableNT = () => {


    return (
        <View style={{flex:1,justifyContent:'center',}}>
            <Pressable  style={{backgroundColor:'green',borderRadius:8,margin:10,padding:10}}
             onPress={()=>console.warn('on press')}
             onLongPress={()=>console.warn('on press long')}
             onPressIn={()=>console.warn('press in ')}
             onPressOut={()=>console.log('press out')}>
                <Text style={{fontSize:18,textAlign:'center',color:'white'}}>
                    Pressable
                </Text>
            </Pressable>
        </View>
    )
}

export default PrassableNT