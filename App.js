/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// import BackgroundTimer from 'react-native-background-timer';
import firebase from 'firebase';
import reducers from './src/reducers';
import { RouterComponent } from './src/Router';

console.disableYellowBox = true;
// BackHandler.exitApp();
class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAoMy_Y0BF7XVm95F-TG75or_tvgX-Q3Ew',
      authDomain: 'strategy-dbc13.firebaseapp.com',
      databaseURL: 'https://strategy-dbc13.firebaseio.com',
      projectId: 'strategy-dbc13',
      storageBucket: '',
      messagingSenderId: '140762388762'
  };
if (!firebase.apps.length) {
  firebase.initializeApp(config);
      console.log('initialized');
}
  }

  // setTimeout = BackgroundTimer.setTimeout;
  // setInterval = BackgroundTimer.setInterval;
  // clearTimeout = BackgroundTimer.clearTimeout;
  // clearInterval = BackgroundTimer.clearInterval;
  render() {
   const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <RouterComponent />
      </Provider>
          );
      }
    }

export default App;
