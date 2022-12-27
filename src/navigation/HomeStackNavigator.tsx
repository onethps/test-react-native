import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{
          title: 'LoginScreen',
        }}
      />
    </Stack.Navigator>
  );
};
