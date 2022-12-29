import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Button} from 'react-native';
import {LoginScreen, HomeScreen} from '../screens';
import {RootStackParamList, useAppNavigation} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  const nav = useAppNavigation();

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{
          title: 'LoginScreen',
        }}
      />
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => nav.navigate('LoginScreen')}
              title="Log Out"
              color="blue"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
