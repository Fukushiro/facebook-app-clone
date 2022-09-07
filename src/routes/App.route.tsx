import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Home} from '../pages/Home';
// route configs
type AppRouteParam = {
  home: undefined;
};
export type AppRoutesType = NativeStackNavigationProp<AppRouteParam>;
const Stack = createNativeStackNavigator<AppRouteParam>();
//
export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Home} name="home" />
    </Stack.Navigator>
  );
}
