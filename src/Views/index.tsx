import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginComponent from './login';
import Home from './home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Setting from './setting';

const Stack = createNativeStackNavigator();
export default class RootComponent extends Component {
  render() {
    return (
      // <View style={{flex: 1}}>
      //   <Setting />
      // </View>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginComponent} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
