import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import RootComponent from './src/Views';
const App = () => {
  return (
    <SafeAreaView style={Styles.main}>
      <RootComponent />
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  main: {
    flex: 100,
  },
});
export default App;
