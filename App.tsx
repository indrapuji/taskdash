'use strict';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';



const App = () => {
  return (
    <NavigationContainer>
      <Login/>
    </NavigationContainer>
  )
}

export default App

