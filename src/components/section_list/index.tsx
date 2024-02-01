import React from 'react'
import { Text, View, SectionList, FlatList } from 'react-native'

interface IUser {
    id: number,
    name: string
    skils: string[]
}

// it's not complated 

const USER = [
    {
        name: 'bidyut ranjan nayak',
        skils: ['python', 'node js', 'react', 'next', 'react-native']
    },
    {

        name: 'rashmi',
        skils: ['sso', 'node js', 'react', 'next', 'react-native']
    }
]


const SectionListReactNT = () => {
    return (
        <>
        <Text style={{ fontSize: 20, textAlign: 'center', color: 'blue' }}>
          Section List
        </Text>
        <View>
          <SectionList
            sections={[
              { title: 'Users', data: USER },
              // Add more sections if needed
            ]}
            renderItem={({ item }) => (
              <View>
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                {/* {item.skils.map((skill, index) => (
                  <Text key={index}>{skill}</Text>
                ))} */}
               <FlatList
                data={item.skils}
                renderItem={({ item: skill }) => (
                  <Text key={skill}>{skill}</Text>
                )}
                keyExtractor={(skill) => skill}
              />
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ fontWeight: 'bold' }}>{title}</Text>
            )}
           
          />
        </View>
      </>
    )
}

export default SectionListReactNT