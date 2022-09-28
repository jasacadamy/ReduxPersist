import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';
import HomeScreen from '../Home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const AuthStackContainer = () => {
  return (
    <AuthStack.Navigator>
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
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Auth" component={AuthStackContainer} />
        <MainStack.Screen name="Home" component={HomeStackContainer} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
