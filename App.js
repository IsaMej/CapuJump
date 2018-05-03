import React, { Component }  from 'react';
import { StackNavigator } from 'react-navigation';

import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import ViewHome from './view/home'
import ViewPlay from './view/PokeBall'
import ViewCredit from './view/credit'
import ViewHigh from './view/highscore'
import ViewActivityIndicator from './view/activityIndicator';

const App = StackNavigator({
  ViewHome: { screen: ViewHome},
  ViewPlay: { screen: ViewPlay},
  ViewCredit: { screen: ViewCredit},
  ViewHigh: { screen: ViewHigh}
})

export default App;