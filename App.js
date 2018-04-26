import React from 'react';
import { StackNavigator } from 'react-navigation';

import ViewHome from './view/home'
import ViewPlay from './view/play'
import ViewCredit from './view/credit'
import ViewHigh from './view/highscore';

const App = StackNavigator({
  ViewHome: { screen: ViewHome},
  ViewPlay: { screen: ViewPlay},
  ViewCredit: { screen: ViewCredit},
  ViewHigh: { screen: ViewHigh}
})

export default App;