import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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

function TabHomeScreen({navigation}){
  return (
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text>Tab Home page</Text>
      </View>
  )
}
function TabAboutScreen({navigation}){
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text>Tab About PAGE</Text>
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
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: true
    }
  }
  render(){
    return (
      <NavigationContainer>
        {(this.state.isLoggedIn) ? (
          <Tab.Navigator>
          <Tab.Screen name="Home" component={TabHomeScreen}></Tab.Screen>
          <Tab.Screen name="About" component={TabAboutScreen}></Tab.Screen>
          <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
        </Tab.Navigator>
        ): (
          <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" 
          component={HomeScreen}></Drawer.Screen>
          <Drawer.Screen name="About" 
          component={About}></Drawer.Screen>
        </Drawer.Navigator>
        )}
      </NavigationContainer>
    )
  }
}