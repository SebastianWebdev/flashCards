import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import React, {useEffect} from 'react';

// Importing Actions
import {initCourses, initSettings} from '../redux/actions';

// importing Screens
import HomeScreen from './HomeScreen';
import CardEditScreen from './CardEditScreen';
import TutorialScreen from './TutorialScreen';
import SettingsScreen from './SettingsScreen';
import EditScreen from './EditScreen';
import GameScreen from './GameScreen';
// importing storage functions
import {getCourses, getSettings} from '../utils/storage';

// importing constants
import {colors} from '../constants/constants';

import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';

//importing native elements
import {Button} from 'react-native';

const Init = props => {
  useEffect(() => {
    const {initCourses, initSettings} = props;
    // getting data from storage
    async function fetchData() {
      try {
        const courses = await getCourses();
        const settings = await getSettings();
        initCourses(courses);
        initSettings(settings);
      } catch (error) {}
    }
    fetchData();
  });
  return (
    <>
      <Button
        onPress={() => {
          console.log(props);
        }}
        title="Wciśnij"></Button>
      <NavigationContainer>
        <Stack.Navigator
          headerMode="screen"
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.backgroundDark,
            },
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home'}}></Stack.Screen>
          <Stack.Screen name="Game" component={GameScreen}></Stack.Screen>
          <Stack.Screen
            name="Edit Card"
            component={CardEditScreen}></Stack.Screen>
          <Stack.Screen name="Edit" component={EditScreen}></Stack.Screen>
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
const mapStateToProps = props => {
  return {...props};
};
export default connect(mapStateToProps, {
  initCourses,
  initSettings,
})(Init);
