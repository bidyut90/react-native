import  React, { Component } from 'react'
import { Text } from 'react-native'

type Props = {
    name:string
}

type State = {}

class Showdata extends Component<Props, State> {
  state = {}


  render() {
    console.warn(this.props.name)
    return (
      
      <Text>
        my student Name {this.props.name}
      </Text>
    )
  }
}

export default Showdata