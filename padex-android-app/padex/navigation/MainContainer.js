import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import WelcomeScreen from './screens/WelcomeScreen';
import MainContainer2 from './MainContainer2';

import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>

        <Stack.Screen name="MainContainer2" component={MainContainer2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;

