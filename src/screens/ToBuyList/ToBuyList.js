import { View, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setNumberList, setProductList } from '../../../Slice';
import { Style } from './Style';
import Header from '../../../components/Header/Header';
import List from '../../../components/ProductList/List';
import BuyList from '../../../components/BuyList/BuyList';

const ToBuyList = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const numberList = counter.numberList
  const controlList = counter.controlList

  useEffect(() => {
    getNumberData()
    getProductData()
  }, [])

  useEffect(() => {
    setNumberData()
    setProductData()
  }, [numberList])

  const setNumberData = async () => {
    const sendNumber = numberList;
    const jsonSendNumber = JSON.stringify(sendNumber);
    await AsyncStorage.setItem('number', jsonSendNumber);
  };
  const setProductData = async () => {
    const sendProduct = controlList;
    const jsonSendProduct = JSON.stringify(sendProduct);
    await AsyncStorage.setItem('product', jsonSendProduct);
  };

  const getNumberData = async () => {
    const getNumber = await AsyncStorage.getItem('number');
    const jsonGetNumber = JSON.parse(getNumber);
    dispatch(setNumberList(jsonGetNumber || numberList));
  };
  const getProductData = async () => {
    const getProduct = await AsyncStorage.getItem('product');
    const jsonGetProduct = JSON.parse(getProduct);
    dispatch(setProductList(jsonGetProduct || controlList));
  };

  const removeData = async () => {
    return AsyncStorage.removeItem('list');
  };

  const clearAllData = async () => {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => alert('Bütün listeler silindi'))
      .catch(er => alert(er));
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