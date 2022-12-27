import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {HomeStackNavigator} from './src/navigation/HomeStackNavigator';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
