import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const onSubmitPress = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'black', marginBottom: 30}}>
        Register Screen
      </Text>
      <Button onPress={onSubmitPress} title="Register" color="#841584" />
    </View>
  );
};
export default RegisterScreen;
