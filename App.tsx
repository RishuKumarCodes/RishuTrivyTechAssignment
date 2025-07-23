import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/pages/HomeScreen';
import PaymentScreen from './src/pages/PaymentScreen';
import BottomNavigation from './src/components/BottomNavigation';
import GineScreen from './src/pages/GineScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        tabBar={props => <BottomNavigation {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Payment" component={PaymentScreen} />
        <Tab.Screen name="Ginie" component={GineScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
