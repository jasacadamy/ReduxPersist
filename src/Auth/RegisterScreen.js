import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {LoginOrRegisterSchema} from '../Schema';

import {registerAccount} from '../Reducer/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const authData = useSelector(state => state.authReducer);
  console.log(authData, 'authDataauthData');

  const onSubmitPress = values => {
    dispatch(registerAccount(values));
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'black', marginBottom: 30}}>
        Register Screen
      </Text>
      <Text style={style.backbutton} onPress={() => navigation.goBack()}>
        Back
      </Text>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LoginOrRegisterSchema}
        onSubmit={onSubmitPress}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={style.inputContainer}
                placeholder="Enter email"
              />
              {errors.email && touched.email ? (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              ) : null}
              <View style={{height: 20}} />
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={style.inputContainer}
                placeholder="Enter password"
                secureTextEntry
              />
              {errors.password && touched.password ? (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              ) : null}
            </View>
            <View style={{flexDirection: 'row', marginTop: 50}}>
              {authData?.loading ? (
                <ActivityIndicator color="black" size="large" />
              ) : (
                <Button
                  onPress={handleSubmit}
                  title="Register"
                  color="#841584"
                />
              )}
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
  backbutton: {
    position: 'absolute',
    top: 25,
    left: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
export default RegisterScreen;
