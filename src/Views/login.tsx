import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
// const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LoginComponent = (props: any) => {
  const {navigation} = props;
  const [EyesPassWord, setEyesPassWord] = useState(true);
  const [Email, setEmail] = useState('');
  return (
    <ImageBackground
      style={Styles.background}
      source={require('../image/background.jpg')}
      resizeMode="cover">
      <SafeAreaView style={Styles.main}>
        <View style={Styles.formLogin}>
          <View style={Styles.Email}>
            <Text style={Styles.label}>Email</Text>
            <TextInput
              style={Styles.Input}
              placeholder="Email"
              value={Email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={Styles.Email}>
            <Text style={Styles.label}>PassWord</Text>
            <TextInput
              style={Styles.Input}
              placeholder="PassWord"
              secureTextEntry={EyesPassWord}
            />
            <TouchableOpacity
              style={Styles.iconPassWord}
              onPress={() => setEyesPassWord(!EyesPassWord)}>
              {EyesPassWord ? (
                <Image
                  source={require('../image/eye-outline.png')}
                  style={Styles.iconPassWord}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../image/eye-off-outline.png')}
                  style={Styles.iconPassWord}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home', {email: Email});
            }}>
            <Text style={Styles.Login}>Đăng Nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.Resign}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const Styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
  },
  main: {
    width: '100%',
    height: '100%',
  },
  formLogin: {
    marginTop: (100 / 3 / 100) * height,
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Email: {
    width: '70%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    width: '30%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  Input: {
    width: '65%',
    borderBottomWidth: 2,
    borderColor: 'white',
    paddingRight: 35,
    fontSize: 20,
  },
  iconPassWord: {
    height: '100%',
    width: 30,
    position: 'absolute',
    right: 0,
  },
  button: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
  },
  Login: {
    borderWidth: 2,
    borderColor: 'white',
    width: 200,
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 30,
    color: 'white',
    backgroundColor: '#009db5',
  },
  Resign: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'white',
    width: 200,
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 30,
    color: 'white',
    backgroundColor: '#081cff',
  },
});
export default LoginComponent;
