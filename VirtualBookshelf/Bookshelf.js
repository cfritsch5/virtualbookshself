import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Book from './book';
import Canvas from 'react-native-canvas';

export default class App extends React.Component {

  handleCanvas (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0,10,10, 100, 100);
    // let img = new Image();
    // img.src = "./img/TheHobbit_cover.jpg";
    // ctx.drawImage(img, 0, 0, 50, 325);
  }

  render() {
    return (
      <View>
        <Text>at the Bookshelf</Text>
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
});
