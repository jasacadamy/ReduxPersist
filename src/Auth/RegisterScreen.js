import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

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
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={style.inputContainer}
                placeholder="Enter email"
              />
              <View style={{height: 20}} />
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={style.inputContainer}
                placeholder="Enter password"
                secureTextEntry
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: 50}}>
              <Button
                onPress={onSubmitPress}
                title="Register"
                color="#841584"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    borderColor: 'black',
    borderWidth: 1,
    width: 250,
    padding: 10,
  },
});
export default RegisterScreen;
