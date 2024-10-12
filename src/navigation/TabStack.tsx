import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NumbersStack from './NumbersStack';
import LettersStack from './LettersStack';
import CustomTabBar from '../components/tabbar/CustomTabBar';
import SettingsStack from './SettingsStack';

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{headerShown:false}}>
      <Tab.Screen name="Letters" component={LettersStack} />
      <Tab.Screen name="Numbers" component={NumbersStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

export default TabStack;