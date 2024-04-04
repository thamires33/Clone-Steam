import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import JogoScreen from './components/JogoScreen';
import CommunityScreen from './components/CommunityScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './components/styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Community" component={CommunityScreen} />
          <Stack.Screen name="Jogos" component={JogoScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );

};