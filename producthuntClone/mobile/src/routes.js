import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// StatusBar config
import './config/StatusBarConfig';

// Routes
import Main from './pages/main';
import Products from './pages/products';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#DA552F'
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen 
        name="/products" 
        component={Products}
      />
    </Stack.Navigator>
  </NavigationContainer>
);