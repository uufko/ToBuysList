import { View, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header/Header';
import List from '../../components/ProductList/List';
import { useSelector, useDispatch } from 'react-redux';
import BuyList from '../../components/BuyList/BuyList';
import { addItem, setData2, addItem2 } from '../../Slice';

let deviceHeight = Dimensions.get('window').height

const ToBuyList = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    counter.count
    setData()
  }, [counter.count])

  const getData = async () => {
    const getList = await AsyncStorage.getItem('list')
    const jsonGetList = JSON.parse(getList)
    dispatch(addItem2(jsonGetList || []))
  }
  const setData = async () => {
    const sendList = counter.count
    const jsonSendList = JSON.stringify(sendList)
    await AsyncStorage.setItem('list', jsonSendList)
  }
  const removeData = async () => {
    return AsyncStorage.removeItem("list")
  }

  const clearAllData = async () => {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => alert('success'))
      .catch((er) => alert(er))
  }

  return (
    <SafeAreaView style={[styles.container, { rowGap: 2 }]}>
      <Header remove={clearAllData} />
      <BuyList />
      <View style={[styles.viewStyle, { flex: 10 }]}>
        <List />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "colums",
    padding: 2,
    backgroundColor: "white"
  },
  viewStyle: {
    flex: 15,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    padding: 1,
  },
  touchableStyle: {
    backgroundColor: "#eaeaea",
    marginVertical: 2,
    marginHorizontal: 10,
    flex: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: .5,
    elevation: 3,
    shadowOffset: { height: 7, width: 3 }
  }
})

export default ToBuyList