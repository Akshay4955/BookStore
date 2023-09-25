import React from 'react';
import AppStack from './AppStack';
import {NavigationContainer} from '@react-navigation/native';

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Routes;
