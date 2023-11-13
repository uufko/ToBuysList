import { View, Text, StyleSheet, Dimensions, SafeAreaView, FlatList, Button, TouchableOpacity, Alert, ToastAndroid, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

let deviceHeight = Dimensions.get('window').height

const ToBuyList = () => {
  const [toAdd, setToAdd] = useState([])
  const [text, setText] = useState("")
  const [search, setSearch] = useState("")
  const [state, setState] = useState(false)
  const list = ["Elma", "Armut", "Tavuk", "Salça", "Erik", "Et", "Pirinç", "Tereyağı", "Zeytin", "Sabun",
    "Makarna", "Bulgur", "Islak mendil", "Su", "Süt", "Peynir", "Deterjan","Domates","Pirinç",
    "Soğan","Patates","Yoğurt","Defter","Kalem","Çöp Poşeti","Kedi Maması","Köpek Maması","Yumuşatıcı","Tablet","Havlu Peçete"]

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
    list.sort(),
    <SafeAreaView style={[styles.container, { rowGap: 2 }]}>
      <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row", justifyContent:"space-evenly"}}>
      <Text style={{ fontFamily: "Poppins-SemiBold", color: "black", fontSize: 20, padding: 10 }}>Alınacaklar Listesi</Text>
      
      <TouchableOpacity onPress={() => {
            toAdd.splice(0, toAdd.length)
            setState(!state)
          }} ><Image 
      style={{height:50, width:50, resizeMode:"contain"}}
      source={require("../../assets/images/1610958.png")}/>
      </TouchableOpacity>
      
      </View>
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
        <View>
          <TextInput
            placeholder='ara'
            onChangeText={(e) => setText(e)} />
          
          <Text>{text}</Text>
        </View>

        <View style={styles.viewStyle}>
          <FlatList style={{ flex: 1, margin: 5 }}
            data={list}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ alignItems: "stretch", justifyContent: "center" }} onPress={() => {
                  if (toAdd.find(s => s == item) == item) {
                    ToastAndroid.show("varrr", ToastAndroid.SHORT)
                  }
                  else { setToAdd([...toAdd, item]) }
                }
                }>
                  <Text style={{ fontFamily: "Poppins-SemiBold", color: "black", fontSize: 15, backgroundColor: "#eaeaea", marginVertical: 2, padding: 10, borderRadius: 10 }}>{item}</Text>
                </TouchableOpacity>
              )
            }}>
          </FlatList></View>
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
    borderWidth: 1,
    justifyContent:"center",
  },
  touchableStyle: {
    backgroundColor: "#eaeaea",
    marginVertical: 2,
    marginHorizontal: 10,
    flex: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent:"center",
    shadowColor: "black",
    shadowOpacity: .5,
    elevation: 3,
    shadowOffset: { height: 7, width: 3 }
  }
})

export default ToBuyList