import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
  header: {
    fontSize: 25,
    color: 'blue',
    textAlign: 'center',
  },
  gridBox: {
    fontSize: 18,
    color: 'white',
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'blue',
    padding: 5,
    margin: 5,
    width:100,
    height:100,
    alignItems:"center",
    textAlignVertical:'center',
    borderRadius:50,
    textAlign:'center'

  },
  outerContainer: {
    flex: 1,
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  }
})
