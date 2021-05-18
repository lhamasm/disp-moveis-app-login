import React from 'react';

import DefaultScreen from './src/components/DefaultScreen';
import Login from './src/screens/Login';

const App = () => {
  return (
    <DefaultScreen>
      <Login />
    </DefaultScreen>
  );
}

export default App;
