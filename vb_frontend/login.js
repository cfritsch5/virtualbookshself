import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ""
    };
  }

  render () {
    return (
      <View>
        <Text>Login:
        <TextInput
        style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      </Text>
      </View>
    );
  }
}
