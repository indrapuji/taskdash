import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../constant/stackTypes';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default App;
