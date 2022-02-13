import React from 'react';
import Main from './components/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          options={{
            title: 'Pro Sound',
            headerStyle: {
              backgroundColor: '#252422',
            },
              headerTintColor: '#fff',
            }}
          component={Main} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


