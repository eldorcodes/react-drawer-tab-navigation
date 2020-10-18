import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen(){
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>This is Home Page</Text>
    </View>
  )
}
function AboutScreen(){
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>This is About Page!!!!</Text>
    </View>
  )
}
function Profile(){
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Profile Page</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="About" component={AboutScreen}></Tab.Screen>
        <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
      </Tab.Navigator>     
    </NavigationContainer>
  )
}