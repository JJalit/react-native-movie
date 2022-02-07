import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { UserContextProvider } from './Context/User';
import Navigator from './Screens/Navigator';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

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
