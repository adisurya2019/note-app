// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TombolAdd } from './components';
import { SignUp, Login, home, addNote } from './pages';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="home" component={home} options={{headerShown: false}} />
        <Stack.Screen name="ADD" component={addNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}