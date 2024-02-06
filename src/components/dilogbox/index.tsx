import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const DilogBox = () => {

    const[opneModal, setOpenModal] = useState(true)
    return (
        <View style={style.main}>
            <Modal transparent={false} visible={opneModal}>
                <View>
                    <Text >
                     hello open modal
                    </Text>
                    <Button title='close' onPress={()=>setOpenModal(false)}/>
                </View>
            </Modal>
            <View style={style.buttonView}>
                <Button title='Open Modal'  onPress={()=>setOpenModal(true)}/>
            </View>
        </View>

    )
}

export default DilogBox

const style = StyleSheet.create({
    main: {
        flex: 1
    },
    buttonView:{
        flex:1,
        justifyContent:'flex-end'
    }

})