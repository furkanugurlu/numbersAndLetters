import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { RootStackParamList } from '../types/navigation';
import SettingsScreen from '../screens/SettingScreen';

const Stack = createSharedElementStackNavigator<RootStackParamList>();

function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Setting" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default SettingsStack;