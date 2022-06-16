// In App.js in a new project
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Browser from './src/Browser';
import Home from './src/Home';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Browser' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Browser" component={Browser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;