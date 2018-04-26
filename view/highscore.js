import React, { Component } from 'react';
import { AsyncStorage, Alert, Button, AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

export default class High extends Component {
    static navigationOptions = {
        title: 'Highscore'
    }

    state = {
        'storage': ''
     }

    componentDidMount = () => AsyncStorage.getItem('MyStorage').then((value) => {this.setState({ 'storage': value })})

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {styles.container}>
                <Text>{this.state.storage}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems: 'center',
       marginTop: 50
    }
})