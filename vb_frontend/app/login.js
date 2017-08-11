import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handlesubmit(e){
    e.preventDefault();
    console.log("sumbit");
  }

  render () {
    return (
      <View>
        <Text>Login:
        <TextInput
        style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.text}
      />
      </Text>
      <Text> Password:
      <TextInput
      style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
       defaultValue = {""}
        secureTextEntry = {true}
        onSubmitEditing = {this.handlesubmit}
        onChangeText={(password) => this.setState({password})}
        value={this.state.text}
      />
      </Text>
      </View>
    );
  }
}
