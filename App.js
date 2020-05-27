import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './components/HomeScreen'
import {CheckScreen} from './components/CheckScreen'
import { StoreProvider } from './contexts/MainContext'


const Stack = createStackNavigator();

export default function App() {
  return (
      <StoreProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }}  name="CheckScreen" component={CheckScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </StoreProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
