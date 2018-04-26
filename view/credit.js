import React, { Component } from 'react';
import { BackHandler, Alert, Button, AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

export default class Credit extends Component {
    static navigationOptions = {
        title: 'Credit'
    }
  render() {
    const { navigate } = this.props.navigation;
    let pic = {
        uri: 'https://www.pokebip.com/pokedex-images/artworks/190.png'
    };
    return (
      <View style={styles.bg}>
        <Image source={pic} style={styles.image}/>
        <Text style={styles.title}>CREDITS</Text>
        <Text style={styles.textCredits}>*Team Capupu*</Text>
        <Text>Rémi Béziat</Text>
        <Text>Léa Gattesco</Text>
        <Text>Nicolas Hamelin</Text>
        <Text>Isabelle Mejias-Martin</Text>
        <Text>Alexandre Ochman</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
    bg: {
        flex: 1,
        backgroundColor: '#AB7ABC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#EEE29A',
    },
    textCredits: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFFFF',
    },
    image: {
        width: 293, 
        height: 210,
    },
});