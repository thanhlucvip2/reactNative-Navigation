import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Setting = (props: any) => {
  const {navigation} = props;

  return (
    <View style={Styles.Main}>
      <View style={Styles.Header}>
        <TouchableOpacity
          style={Styles.buttonBack}
          onPress={() => navigation.openDrawer()}>
          <Image
            style={Styles.iconBack}
            source={require('../image/list.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.body}>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text style={Styles.buttonLogin}>LogOut</Text>
        </TouchableOpacity>
        <Text style={Styles.text}>Setting Component</Text>
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
  buttonLogin: {
    fontSize: 30,
    marginVertical: 20,
    backgroundColor: 'green',
    paddingHorizontal: 20,
    borderRadius: 20,
    color: 'white',
  },
});
export default Setting;
