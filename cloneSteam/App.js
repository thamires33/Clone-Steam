import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import CommunityScreen from './components/CommunityScreen';
import ChatScreen from './components/ChatScreen';
import ShopScreen from './components/ShopScreen';
import SafetyScreen from './components/SafetyScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './components/styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Community" component={CommunityScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Shop" component={ShopScreen} />
          <Stack.Screen name="Safety" component={SafetyScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );

};