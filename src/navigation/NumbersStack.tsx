import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import NumberScreen from '../screens/NumberScreen';
import { RootStackParamList } from '../types/navigation';

const Stack = createSharedElementStackNavigator<RootStackParamList>();

function NumbersStack() {
  return (
    <Stack.Navigator
      initialRouteName="Number"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Number" component={NumberScreen} />
    </Stack.Navigator>
  );
}

export default NumbersStack;