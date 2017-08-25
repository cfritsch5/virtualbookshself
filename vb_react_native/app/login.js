import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit(e){
    e.preventDefault();
    console.log("submit");
  }

  render () {
    const Style = StyleSheet.create({
      view: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
    });
    return (
      <View style={Style.view}>
        <Text >Login: </Text>
        <TextInput
        style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />

      <Text> Password:</Text>
      <TextInput
      style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
       defaultValue = {""}
        secureTextEntry = {true}
        onSubmitEditing = {this.handlesubmit}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
      />

      </View>
    );
  }
}
