import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import TabStack from './TabStack';
import DetailScreen from '../screens/DetailScreen';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { RootStackParamList } from '../types/navigation';

const Stack = createSharedElementStackNavigator<RootStackParamList>();


export function AppNavigationContainer(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen name="Main" component={TabStack} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={() => ({
            headerShown: false,
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 500 } },
              close: { animation: 'timing', config: { duration: 500 } },
            },
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
