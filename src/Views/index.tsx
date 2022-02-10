import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginComponent from './login';
import Home from './home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Setting from './setting';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, View, LogBox} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Detail from './detail';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default class RootComponent extends Component {
  render() {
    return (
      // <View style={{flex: 1}}>
      //   <Setting />
      // </View>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MenuComponents"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginComponent} />
          <Stack.Screen name="MenuComponents" component={MenuComponents} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const MenuComponents = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabSetting"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="TabSetting" component={TabSetting} />
    </Drawer.Navigator>
  );
};

const Homes = () => {
  return (
    <View style={Styles.body}>
      <Text style={Styles.text}>Homes Component</Text>
    </View>
  );
};

const Test = () => {
  return (
    <View style={Styles.body}>
      <Text style={Styles.text}>Test Component</Text>
    </View>
  );
};
const TabSetting = () => {
  return (
    <Tab.Navigator
      initialRouteName="Detail"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => {
            return (
              <TouchableOpacity>
                <Image
                  source={require('../image/setting.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Homes"
        component={Homes}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <Image
                source={require('../image/accessibility-outline.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <Image
                source={require('../image/archive-outline.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={Test}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <Image
                source={require('../image/eye-outline.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Styles = StyleSheet.create({
  Main: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 30,
    color: 'white',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    width: 20,
    height: 30,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 20,
    color: 'black',
  },
  buttonBack: {
    flexDirection: 'row',
  },
  buttonLogin: {
    fontSize: 30,
    marginVertical: 20,
    backgroundColor: 'green',
    paddingHorizontal: 20,
    borderRadius: 20,
    color: 'white',
  },
});
