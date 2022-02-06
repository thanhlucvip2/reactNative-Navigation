import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class FlexBoxComponent extends Component {
  render() {
    return (
      <SafeAreaView style={Styles.main}>
        <View style={Styles.main1}>
          <View style={Styles.main1Left}>
            <View style={Styles.main1LeftBox}></View>
          </View>
          <View style={Styles.main1Right}>
            <Text>Tôi Tên Là Lực</Text>
          </View>
        </View>
        <View style={Styles.main2}>
          <View style={Styles.main2Left}>
            <Text style={Styles.main2RightText}>Text Nằm Giữa</Text>
          </View>
          <View style={Styles.main2Right}>
            <View style={Styles.main2RightTop}></View>
            <View style={Styles.main2RightBottom}></View>
          </View>
        </View>
        <View style={Styles.main3}>
          <View style={Styles.main3Left}></View>
          <View style={Styles.main3Center}></View>
          <View style={Styles.main3Right}></View>
        </View>
        <View style={Styles.main4}>
          <View style={Styles.main4Big}>
            <View style={Styles.main4Mini}></View>
          </View>
        </View>
        <View style={Styles.main5}>
          <TouchableOpacity style={Styles.main5Save}>
            <Text style={Styles.main5Text}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.main5Cancel}>
            <Text style={Styles.main5Text}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  main1: {
    width: '100%',
    height: `${100 / 6}%`,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  main1Left: {
    height: '100%',
    width: `${100 / 3}%`,
    borderWidth: 1,
  },
  main1LeftBox: {
    flex: 1,
    backgroundColor: 'red',
    margin: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  main1Right: {
    height: '100%',
    width: `${(100 / 3) * 2}%`,
    borderWidth: 1,
    padding: 10,
  },
  main2: {
    width: '100%',
    height: `${100 / 6}%`,
    borderWidth: 1,
    flexDirection: 'row',
  },
  main2Left: {
    width: `${(100 / 3) * 2}%`,
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main2Right: {
    width: `${100 / 3}%`,
    height: '100%',
  },
  main2RightText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  main2RightTop: {
    width: '100%',
    height: `${100 / 2}%`,
    backgroundColor: 'green',
  },
  main2RightBottom: {
    width: '100%',
    height: `${100 / 2}%`,
    backgroundColor: 'blue',
  },
  main3: {
    width: '100%',
    height: `${100 / 6}%`,
    flexDirection: 'row',
  },
  main3Left: {
    width: `${100 / 3}%`,
    backgroundColor: 'yellow',
    borderWidth: 1,
  },
  main3Center: {
    width: `${100 / 3}%`,
    borderWidth: 1,
    backgroundColor: 'gray',
  },
  main3Right: {
    width: `${100 / 3}%`,
    borderWidth: 1,
    backgroundColor: 'pink',
  },
  main4: {
    height: `${(100 / 6) * 2}%`,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main4Big: {
    width: '60%',
    height: '60%',
    backgroundColor: 'green',
    borderWidth: 1,
  },
  main4Mini: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    left: 170,
    top: -20,
    borderWidth: 1,
  },
  main5: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main5Text: {
    color: 'white',
    fontSize: 20,
  },
  main5Save: {
    borderWidth: 2,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 30,
    borderColor: 'red',
    backgroundColor: 'gray',
    marginHorizontal: 20,
  },
  main5Cancel: {
    borderWidth: 2,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 30,
    borderColor: 'green',
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
