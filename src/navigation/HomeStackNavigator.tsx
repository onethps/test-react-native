import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, useAppNavigation} from './types';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen';
import {Button} from 'react-native';
import {CommentsModal} from '../sections/home-screen/CommentsModal';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  const nav = useAppNavigation();

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Group>
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
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="CommentsModal" component={CommentsModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
