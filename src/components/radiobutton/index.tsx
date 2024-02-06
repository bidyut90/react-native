import React, { useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'


const CustomRadio = () => {

  const [slected, setSelected] = useState('male')
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>setSelected('male')}>
        <View style={styles.radioWarper}>
          <View style={styles.radio}>
          {slected === 'male' &&   <View style={styles.radiobutton}>
            </View>}
          </View>
         <Text>
            Male
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelected('female')} >
        <View style={styles.radioWarper}>
          <View style={styles.radio}>
          {slected === 'female' &&    <View style={styles.radiobutton}>
            </View>}
          </View>
          <Text>
          Female
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CustomRadio

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'row'
  },
  radio: {
    height: 30,
    width: 30,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20
  },
  radiobutton: {
    height: 22,
    width: 22,
    backgroundColor: 'black',
    borderRadius: 15,
    margin: 2

  },
  radioWarper: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }

})