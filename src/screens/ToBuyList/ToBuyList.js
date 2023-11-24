import { View, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { addItem2, decreaseData, refresh } from '../../../Slice';
import { Style } from './Style';
import Header from '../../../components/Header/Header';
import List from '../../../components/ProductList/List';
import BuyList from '../../../components/BuyList/BuyList';

const ToBuyList = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const dataList = counter.BuyList;

  const clearAllData = async () => {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => alert('Bütün listeler silindi'))
      .catch(er => alert(er));
  };

  const getData = async () => {
    const getList = await AsyncStorage.getItem('list');
    const jsonGetList = JSON.parse(getList);
    dispatch(addItem2(jsonGetList || dataList));
  };

  const setData = async () => {
    const sendList = dataList;
    const jsonSendList = JSON.stringify(sendList);
    await AsyncStorage.setItem('list', jsonSendList);
  };
  const removeData = async () => {
    return AsyncStorage.removeItem('list');
  };

  return (
    <SafeAreaView style={[Style.container, { rowGap: 2 }]}>
      <Header remove={clearAllData} />
      <BuyList />

      <View style={[Style.viewStyle, { flex: 10 }]}>
        <List />
      </View>
    </SafeAreaView>
  );
};

export default ToBuyList;