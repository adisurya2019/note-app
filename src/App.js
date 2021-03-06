// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TombolAdd } from './components';
import { SignUp, Login, home, addNote, editNote} from './pages';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="home" component={home} options={{headerShown: false}} />
        <Stack.Screen name="ADD" component={addNote} options={{headerTintColor: "white", headerStyle:{backgroundColor: '#3E3364'}}} />
        <Stack.Screen name="EDIT" component={editNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}