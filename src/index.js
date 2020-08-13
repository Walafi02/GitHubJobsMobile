import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2B7FC3" />
      <Routes />
    </>
  );
};

export default App;
