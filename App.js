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
import {store, persistor} from './src/Store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  console.log(store.getState(), 'sdfsdf');
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1}}>
          <Navigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
