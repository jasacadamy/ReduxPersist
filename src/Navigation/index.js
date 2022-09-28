import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';
import HomeScreen from '../Home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useSelector} from 'react-redux';

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const AuthStackContainer = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

const HomeStackContainer = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const Navigator = () => {
  const authStatus = useSelector(state => state.authReducer.auth);

  console.log(authStatus, 'authStatusauthStatus');

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {authStatus ? (
          <MainStack.Screen name="Home" component={HomeStackContainer} />
        ) : (
          <MainStack.Screen name="Auth" component={AuthStackContainer} />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
