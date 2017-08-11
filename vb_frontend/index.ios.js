/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import store from './app/store';
import App from './app/app';

export default class vb_frontend extends Component {
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>
  //         Welcome to Virtual Bookshelf!
  //       </Text>
  //       <Text style={styles.instructions}>
  //         To get started, edit index.ios.js
  //       </Text>
  //       <Text style={styles.instructions}>
  //         Press Cmd+R to reload,{'\n'}
  //         Cmd+D or shake for dev menu
  //       </Text>
  //       <Login />
  //     </View>
  //   );
  // }
  render() {
    return (
      <Image
        style={{width: 50, height: 50, borderColor: 'gray', borderWidth: 1}}
        source={{uri: 'http://images.gr-assets.com/authors/1262468106p5/18575.jpg'}}
        />
    );
    // <Image
    //   style={{width: 50, height: 50}}
    //   source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
    //   />
    // return (
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // );
  }
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('vb_frontend', () => vb_frontend);
