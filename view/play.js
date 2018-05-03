import React, { Component } from 'react';
import PopupDialog from 'react-native-popup-dialog';
import { FormLabel, FormInput } from 'react-native-elements';
import { AsyncStorage, StackNavigator, BackHandler, Alert, Button, AppRegistry, Image, StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

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
                
                <ScrollView>
                    <ImageBackground
                    source = {require ('../assets/backgroundpok.png')}
                    style = {
                        {
                            width: 400, 
                            height: 850,
                            //zIndex: -1,
                            flex: 1,
                            //width: null,
                            //height: null,
                            //resizeMode: 'cover'
                
                        }
                    }
                    >


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


                    </ImageBackground>
               
                
                
                </ScrollView>
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
    },
})


/*export default class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('../assets/backgroundpok.jpg')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}

class TestBackgroundImage extends Component {
    render() {
        return (
            <BackgroundImage>
              <Text style={styles.text}>Fullscreen!</Text>
            </BackgroundImage>
        ) 
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});*/