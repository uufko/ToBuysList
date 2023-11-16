import { View, Text, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { addItem } from '../../Slice'
import { useSelector, useDispatch } from 'react-redux';
import { Style } from './Style';

const list = ["Elma", "Armut", "Tavuk", "Salça", "Erik", "Et", "Tereyağı", "Zeytin", "Sabun",
  "Makarna", "Bulgur", "Islak mendil", "Su", "Süt", "Peynir", "Deterjan", "Domates", "Pirinç",
  "Soğan", "Patates", "Yoğurt", "Defter", "Kalem", "Çöp Poşeti", "Kedi Maması", "Köpek Maması",
  "Yumuşatıcı", "Tablet", "Havlu Peçete", "ufuk"]

const List = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)
  const buyList = counter.count

  return (
    list.sort(),
    <View style={Style.viewStyle}>
      <FlatList style={{ flex: 1, marginHorizontal:5 }}
        data={list}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={Style.touchableStyle} onPress={() => {
              if (buyList.find(s => s == item) == item) {
                ToastAndroid.show(`${item} Eklenmiş`, ToastAndroid.CENTER)
              }
              else {
                dispatch(addItem(item));
              }
            } //counter.count = ([...(counter.count), item])
            }>
              <Text style={Style.textStyle}>{item}</Text>
            </TouchableOpacity>
          )
        }}>
      </FlatList >
    </View >
  )
}

export default List