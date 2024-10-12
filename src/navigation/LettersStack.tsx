import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import LetterScreen from '../screens/LetterScreen';
import { RootStackParamList } from '../types/navigation';

const Stack = createSharedElementStackNavigator<RootStackParamList>();

function LettersStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Letter" component={LetterScreen} />
    </Stack.Navigator>
  );
}

export default LettersStack;