import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const Home = (props: any) => {
  const {navigation, route} = props;
  const dataRoute = route.params;
  return (
    <View style={Styles.Main}>
      <View style={Styles.Header}>
        <TouchableOpacity
          style={Styles.buttonBack}
          onPress={() => navigation.goBack()}>
          <Image
            style={Styles.iconBack}
            source={require('../image/back.png')}
          />
          <Text style={Styles.HeaderText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Image
            source={require('../image/setting.png')}
            style={Styles.iconSetting}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.body}>
        <Text style={Styles.text}>Home Component</Text>
        <Text>email : {dataRoute.email}</Text>
      </View>
    </View>
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
  iconSetting: {
    width: 30,
    height: 30,
  },
});
export default Home;
