import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import {style} from './style'

// const style = StyleSheet.create(
//     {
//         textBox:{
//             color:'blue',
//             fontSize:20,
//             backgroundColor:'#ed6809',
//             borderRadius:6,
//             padding:5,
//             textAlign:'center'
//         }
//     }
// )






const UseStyleSheet = () => {
  return (
   <View style={style.textBox}>
    <Text style={style.textColor}>
         use Style sheet
    </Text>
   </View>
  )
}

export default UseStyleSheet