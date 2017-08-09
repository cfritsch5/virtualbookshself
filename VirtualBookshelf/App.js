import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Bookshelf from './Bookshelf';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>blargggg.</Text>
        <Bookshelf />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    width: 100,
    height: 100
  }
});
