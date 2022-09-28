import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {authenticate} from '../Reducer/AuthReducer';
import {useDispatch} from 'react-redux';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onRegisterPress = () => {
    navigation.navigate('Register');
  };
  const onLoginPress = () => {
    dispatch(authenticate());
    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'black', marginBottom: 30}}>
        Login Screen
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Button onPress={onLoginPress} title="Login" color="#841584" />
        <View style={{width: 40}} />
        <Button onPress={onRegisterPress} title="Register" color="#841584" />
      </View>
    </View>
  );
};
export default LoginScreen;
