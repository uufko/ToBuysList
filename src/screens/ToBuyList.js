import { View, Text, StyleSheet, Dimensions, SafeAreaView, FlatList, Button, TouchableOpacity, Alert, ToastAndroid, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header/Header';
import List from '../../components/ProductList/List';
import BuyList from '../../components/BuyList/BuyList';
let deviceHeight = Dimensions.get('window').height

const ToBuyList = () => {
  const [toAdd, setToAdd] = useState([])
  const [text, setText] = useState("")
  const [search, setSearch] = useState("")
  const [state, setState] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setData()
    setToAdd(toAdd)
  }, [toAdd])

  useEffect(() => {
    setData()
  }, [state])


  const getData = async () => {
    const getList = await AsyncStorage.getItem('list')
    const jsonGetList = JSON.parse(getList)
    setToAdd(jsonGetList)
  }

  const setData = async () => {
    const sendList = toAdd
    const jsonSendList = JSON.stringify(sendList)
    await AsyncStorage.setItem('list', jsonSendList)
  }
  const removeData = async () => {
    AsyncStorage.removeItem("user-info")
  }

  return (
    <SafeAreaView style={[styles.container, { rowGap: 2 }]}>
      <Header toAdd={toAdd} state={state} setState={setState} />
      <View style={styles.viewStyle}>
        <FlatList style={{ flex: 1 }}
          data={toAdd}
          horizontal={false}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {
                const index = toAdd.indexOf(item)
                const lengt = toAdd.length
                console.log(item, index, lengt)
                setToAdd(toAdd.filter(deleteItem => deleteItem !== item))

              }} style={styles.touchableStyle}>
                <Text style={{ fontFamily: "Poppins-SemiBold", color: "black", fontSize: 15, padding: 10 }}>{item}</Text>
              </TouchableOpacity>
            )
          }}>
        </FlatList>
      </View>
      <View style={[styles.viewStyle, { flex: 10 }]}>
        <List toAdd={toAdd} setToAdd={setToAdd} />
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
    borderRadius:10,
    borderWidth: 1,
    justifyContent: "center",
    padding:1,
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