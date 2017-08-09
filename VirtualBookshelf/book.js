import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
showBook () {
    return (
      <View>
        <Image
          source={require('./img/TheHobbit_cover.jpg')}
          style={styles.book}
        />
      </View>
    );
  }

  render() {

    return (
      <View>
        <Text>at the Book</Text>
        {this.showBook()}
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
