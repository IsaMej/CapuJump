import React, { Component } from 'react';
import { BackHandler, Alert, Button, AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

export default class Credit extends Component {
    static navigationOptions = {
        title: 'Credit'
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View>
                    <Text>Credit</Text>
                </View>
            </View>
        );
    }
}