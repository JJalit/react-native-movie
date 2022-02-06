import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { UserContextProvider } from './Context/User';
import Navigator from './Screens/Navigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <UserContextProvider>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </UserContextProvider>
  );
};

export default App;
