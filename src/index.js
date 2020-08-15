import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import 'react-native-gesture-handler';

import Routes from './routes';

LogBox.ignoreLogs(['Deprecation warning: value provided is not']);

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2B7FC3" />
      <Routes />
    </>
  );
};

export default App;
