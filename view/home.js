import React, { Component } from 'react';
import {ActivityIndicator, BackHandler, Alert, Button, AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home', 
    header: null
  }
  _onPressButtonExit() {
    BackHandler.exitApp();
    return true
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>CapuBall</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate("ViewPlay", {screen: "ViewPlay"})}
            title="Jouer"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate("ViewHigh", {screen: "ViewHigh"})}
            title="Highscore"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate("ViewCredit", {screen: "ViewCredit"})}
            title="Credits"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButtonExit}
            title="Quitter"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: '#A586BC'
  },
  buttonContainer: {
    margin: 20,
    marginLeft: 85,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: 'solid',
    width: 200,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleText: {
    top: 0,
    marginLeft: 84,
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 50,
  },
})
