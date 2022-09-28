/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from './src/Navigation';
import auth from '@react-native-firebase/auth';
import {View} from 'react-native';
import {store} from './src/Store';
import {Provider} from 'react-redux';

const App = () => {
  console.log(store.getState(), 'sdfsdf');
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigator />
      </View>
    </Provider>
  );
};

export default App;
