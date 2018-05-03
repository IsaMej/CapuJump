import React, { Component } from 'react';
import {ActivityIndicator, BackHandler, Alert, Button, AppRegistry, Image, StyleSheet, Text, View } from 'react-native';


export default class activityIndicator extends Component {
    render() {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#AB7ABC" />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })
  
  AppRegistry.registerComponent('App', () => ActivityIndicator)
  