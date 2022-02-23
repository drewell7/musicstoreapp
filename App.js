import React from 'react';
import Main from './components/MainComponent';
import KorgMono from './components/KorgMonoPage';
import DjRev7 from './components/PioneerDj';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#252422',
            },
              headerTintColor: '#fff',
            }}
            component={Main}
          />
        <Stack.Screen
           name='KorgMono' 
           options={{
             title: 'Korg Monologue',
             headerStyle: {
               backgroundColor: '#252422',
             },
              headerTintColor: '#fff',
           }}
           component={KorgMono} 
          />
        <Stack.Screen 
          name='DjRev7' 
          options={{
            title: 'DDJ-REV7',
            headerStyle: {
              backgroundColor: '#252422',
            },
             headerTintColor: '#fff',
          }}
          component={DjRev7} 
        />
          </Stack.Navigator>
    </NavigationContainer>
  );
}


