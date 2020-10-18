import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

function HomeScreen({navigation}){
  return (
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text>Home Screen. This is Home page</Text>
        <Button title="Go to About"
        onPress={() => {
          navigation.navigate('About')
        }}/>
      </View>
  )
}
function About({navigation}){
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text>About Screen, This is About PAGE</Text>
      <Button title="Go Back" 
      onPress={() => {
        navigation.goBack()
      }}/>
    </View>
  )
}
const Drawer = createDrawerNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" 
        component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name="About" 
        component={About}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}