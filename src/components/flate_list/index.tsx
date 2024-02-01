import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { USER } from '../../utils/constant'
import { IUser } from '../../utils/type'



const FaltLists = () => {
    return (

        <View >
            <Text style={{ textAlign: 'center', fontSize: 20 }}>List with flat List </Text>
            <FlatList data={USER}
              renderItem={({item}:{item:IUser})=><Text>
                {item.name}
              </Text>}
     
            />

        </View>

    )
}

export default FaltLists