import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RouteManager} from './src/routes';
import {Home} from './src/pages/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export default function App() {
  return (
    <>
      <NavigationContainer>
        <RouteManager />
        {/* <Home /> */}
      </NavigationContainer>
    </>
  );
}
