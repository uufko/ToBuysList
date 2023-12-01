import { View, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setCopyList, setList2, setNumberList, setProductList, setThemeStyle, setThemeStyleState } from '../../../Slice';
import { Style } from './Style';
import BuyList from '../../../components/BuyList/BuyList';
import TopHeader from '../../components/molecules/topHeader/topHeader';
import ProductList from '../../components/pages/productList/productList';

const ToBuyList = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const numberList = counter.numberList
  const controlList = counter.controlList
  const theme = counter.colorState
  const List2 = counter.count
  const copyList = counter.copyOfCount
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    getTheme()
    getNumberData()
    getProductData()
    getList2Data()
    getCopyListData()
  }, [])

  useEffect(() => {
    setNumberData()
    setProductData()
  }, [controlList])

  useEffect(() => {
    setNumberData()
    setProductData()
  }, [numberList])

  useEffect(()=>{
    setTheme()
    setNumberData()
    setProductData()
  },[theme])

  ///////////////////////////////////////////

  useEffect(()=>{
    setList2Data()
    setCopyListData()
  },[copyList])

  const setList2Data = async () => {
    const sendList2 = List2;
    const jsonSendList2 = JSON.stringify(sendList2);
    await AsyncStorage.setItem('list2', jsonSendList2);
  };
  const getList2Data = async () => {
    const getList2 = await AsyncStorage.getItem('list2');
    const jsonGetList2 = JSON.parse(getList2);
    dispatch(setList2(jsonGetList2 || List2));
  };

  const setCopyListData = async () => {
    const sendCopyList = copyList;
    const jsonSendCopyList = JSON.stringify(sendCopyList);
    await AsyncStorage.setItem('copyList', jsonSendCopyList);
  };
  const getCopyListData = async () => {
    const getCopyList = await AsyncStorage.getItem('copyList');
    const jsonGetCopyList = JSON.parse(getCopyList);
    dispatch(setCopyList(jsonGetCopyList || copyList));
  };
  //////////////////////////////////////////


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
  const setTheme = async () => {
    const sendThemeStyle = theme;
    const jsonThemeStyle = JSON.stringify(sendThemeStyle);
    await AsyncStorage.setItem('theme', jsonThemeStyle);
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
  const getTheme = async () => {
    const getThemeStyle = await AsyncStorage.getItem('theme');
    const jsonGetThemeStyle = JSON.parse(getThemeStyle);
    dispatch(setThemeStyle(jsonGetThemeStyle));
    dispatch(setThemeStyleState())
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
    <SafeAreaView style={[Style.container, { rowGap: 2 },{backgroundColor:counter.currentContainerColor}]}>
      {/* <Header remove={clearAllData} /> */}
      <TopHeader headerText={"Alınacaklar Listesi"} removeAllData={()=>clearAllData()}/>
      <View style={[Style.viewStyle,{flex:5}]}>
      <BuyList />
      </View> 
      <View style={[Style.viewStyle,{flex:4}]}>
      <ProductList/>
      </View>
      {/* <View >
        <List />
      </View> */}
    </SafeAreaView>
  );
};

export default ToBuyList;