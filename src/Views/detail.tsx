import React, {useEffect, useState} from 'react';
import {Dimensions, Image, SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const ScreenWidth = Dimensions.get('window').width;
const Detail = () => {
  const [Data, setData] = useState([{name: '', price: 0, id: '', image: ''}]);
  const [IndexDataImg, setIndexDataImg] = useState(0 as number);
  useEffect(() => {
    const API = 'https://61a897c033e9df0017ea39cd.mockapi.io/api/ver1/products';
    fetch(API)
      .then(a => {
        return a.json();
      })
      .then(c => setData(c));
  }, []);
  const onScroll = (event: any) => {
    const {nativeEvent} = event; // lấy chỉ số scroll
    let indexImg: number = +(nativeEvent.contentOffset.x / ScreenWidth).toFixed(
      0,
    );
    setIndexDataImg(indexImg);
  };
  console.log(Data[IndexDataImg]);
  return (
    <SafeAreaView style={{width: '100%'}}>
      <ScrollView
        horizontal //scroll theo chiều ngang
        pagingEnabled={true} // bật scroll theo đúng kích thước
        onScroll={onScroll} // hàm scroll
      >
        {Data.map((a, b) => {
          return (
            <Image
              key={b}
              source={{uri: a.image}}
              style={{width: ScreenWidth, height: 300}}
            />
          );
        })}
      </ScrollView>
      <View>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'blue'}}>
          name : {Data[IndexDataImg].name}
        </Text>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'blue'}}>
          price : {Data[IndexDataImg].price}
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Detail;
