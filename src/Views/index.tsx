import React, {Component} from 'react';
import {View} from 'react-native';
import LoginComponent from './login';

export default class RootComponent extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <LoginComponent />
      </View>
    );
  }
}
