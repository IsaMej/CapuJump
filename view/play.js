import React, { Component } from 'react';
import PopupDialog from 'react-native-popup-dialog';
import { FormLabel, FormInput } from 'react-native-elements';
import { AsyncStorage, StackNavigator, BackHandler, Alert, Button, AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

export default class Play extends Component {
    static navigationOptions = {
        title: 'Play', 
        header: false
    }

    constructor(props) {
        super(props);
        this.state = { storage: '' }
    }

    _onChangeStorage = (propertyName) => (event) => {
        this.state[propertyName] = event;
        this.setState({ event });
      }

    _saveScore = () => {
        try {
            AsyncStorage.setItem('MyStorage', JSON.stringify(this.state.storage));
            //Alert.alert("Stockage réussi");
        } catch (error) {
            Alert.alert("Erreur de stockage");
        }
        this.props.navigation.goBack()
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View>

                </View>
                <View style={styles.container}>
                    <PopupDialog ref={(popupOption) => { this.popupOption = popupOption; }}>
                    <View>
                        <Text>Option</Text>
                    </View>
                    </PopupDialog>
                </View>
                <View>
                <PopupDialog ref={(popupEndGame) => { this.popupEndGame = popupEndGame; }}>
                    <View>
                        <FormLabel>Storage</FormLabel>
                        <FormInput
                            onChangeText={this._onChangeStorage("storage")}
                            value={this.state.storage}
                        />
                        <Button
                            raised
                            onPress={this._saveScore}
                            title="Stocker"
                            style={styles.button}
                        />
                    </View>
                    </PopupDialog>
                </View>
                <View style={styles.buttonOption}>
                    <Button  onPress={() => { this.popupOption.show(); }} title = 'O' />
                </View>
                <View style={styles.buttonTest}>
                    <Button  onPress={() => { this.popupEndGame.show(); }} title = 'P' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    buttonOption: {
        top: 30,
        right: 160,
    },
    buttonTest: {
        top: -10,
        left: 160,
    }
})