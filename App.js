/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';

 const Stack = createStackNavigator();

import React from 'react';
// importing Screens
import HomeScreen from "./src/screens/HomeScreen"
import CardEditScreen from "./src/screens/HomeScreen"
import TutorialScreen from "./src/screens/TutorialScreen"
import SettingsScreen from "./src/screens/SettingsScreen"
import EditScreen from "./src/screens/EditScreen"
import GameScreen from "./src/screens/GameScreen"
// importing constants
import {colors} from "./src/constants/constants"

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
 
  View,
} from 'react-native';

import { timing } from 'react-native-reanimated';



const App = ()  => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      headerMode="screen"
      screenOptions={
        {
          headerStyle:{
            backgroundColor:colors.backgroundDark
          }
        }
      }
      >
        <Stack.Screen
         name="Home"
         component={HomeScreen}
         options={{title:"Home"}}
        >
        </Stack.Screen>
        <Stack.Screen
        name="Game"
        component={GameScreen}
        ></Stack.Screen>
           <Stack.Screen
        name="Edit Card"
        component={CardEditScreen}
        ></Stack.Screen>
        <Stack.Screen
        name="Edit"
        component={EditScreen}
        ></Stack.Screen>
          <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
