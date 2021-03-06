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
  View,
  Fetch,
  Linking,
  Button
} from 'react-native';
import store from './app/store';
import App from './app/app';

export default class vb_frontend extends Component {
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('vb_frontend', () => vb_frontend);
// XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
// 	GLOBAL.originalXMLHttpRequest :
// 	GLOBAL.XMLHttpRequest;

// export default class vb_frontend extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       response: {title: ""},
//       authurl: ""
//     };
//
//     this.sendfetch = this.sendfetch.bind(this);
//     this.handlelink = this.handlelink.bind(this);
//   }
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
  // handlelink(){
    // Linking.openURL(this.state.authurl).catch(err => console.error('An error occurred', err));
    // fetch(this.state.authurl).then((r)=> console.log("r",r));
  //   Linking.openURL(this.state.authurl).then((url) => {
  //   if (url) {
  //     console.log('Initial url is: ' + url);
  //   }
  // }).catch(err => console.error('An error occurred', err));
  // }
  //
  // sendfetch(){
  //   var _response;
  //   let book = fetch('http://localhost:3000/tests')
  //   .then((response) => {
  //     console.log(response);
  //     let r = response.json();
  //     console.log(r);
  //     return r;
  //   })
  //     .then((responseJson) => {
  //       this.setState({authurl: responseJson.url});
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

//     fetch('http://localhost:3000/tests', {
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     book: 'yourValue',
//     secondParam: 'yourOtherValue',
//   })
// });
  // }
  //
  // render() {
  //   let responsetitle = this.state.response.title || "none";
  //   return (
  //     <View>
  //       <Button
  //         onPress={this.handlelink}
  //         title="open and auth goodreads"
  //         color="#841584"
  //         accessibilityLabel="authorize this app to access your goodreads account"
  //         />
  //       <Button
  //         onPress={this.sendfetch}
  //         title="fetch auth url"
  //         color="#841584"
  //         accessibilityLabel="authorize this app to access your goodreads account"
  //         />
  //       <Text>Title: {responsetitle}</Text>
  //     </View>
  //
  //   );
    // <Image
    //   style={{width: 100, height: 100, borderColor: 'gray', borderWidth: 1}}
    //   source={{uri: 'https://images.gr-assets.com/books/1412069453m/23288957.jpg'}}
    //   />
    // <Image
    //   style={{width: 50, height: 50}}
    //   source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
    //   />
    // return (
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // );
//   }
// }
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
