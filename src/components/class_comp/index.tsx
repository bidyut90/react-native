import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import Showdata from "./showdata";

type Props = {}

type State = {
  name: string;
}

class Student extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  updateName(text: string){
    this.setState({
      name: text
    })
  }

  render() {
    return (
      <>
        <View>
          <Text style={{ fontSize: 20, textAlign: "center", color: 'blue' }}>
            This class component
          </Text>
          <Text>{this.state.name}</Text>
          <TextInput 
            placeholder="enter your name" 
            onChangeText={(text) => this.updateName(text)} // Pass the updated text to updateName
          />
        </View>
        <Showdata name={this.state.name} />
      </>
    );
  }
}

export default Student;
