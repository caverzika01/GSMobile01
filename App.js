import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AddDataScreen from './screens/AddDataScreen';
import ListDataScreen from './screens/ListDataScreen';
import EditDataScreen from './screens/EditDataScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddData" component={AddDataScreen} />
        <Stack.Screen name="ListData" component={ListDataScreen} />
        <Stack.Screen name="EditData" component={EditDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
