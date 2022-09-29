import React from 'react';
import {View, Text, Button} from 'react-native';

import {signOut} from '../Reducer/AuthReducer';
import {useDispatch} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const onPressLogout = () => {
    dispatch(signOut());
  };
  return (
    <View style={{flex: 1, padding: 40, justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
          marginBottom: 40,
        }}>
        Home Screen
      </Text>
      <Button onPress={onPressLogout} title="Logout" color="#841584" />
    </View>
  );
};
export default HomeScreen;
