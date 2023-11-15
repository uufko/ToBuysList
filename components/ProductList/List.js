import { View, Text, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { addItem } from '../../Slice'
import { useSelector, useDispatch } from 'react-redux';

const list = ["Elma", "Armut", "Tavuk", "Salça", "Erik", "Et", "Tereyağı", "Zeytin", "Sabun",
  "Makarna", "Bulgur", "Islak mendil", "Su", "Süt", "Peynir", "Deterjan", "Domates", "Pirinç",
  "Soğan", "Patates", "Yoğurt", "Defter", "Kalem", "Çöp Poşeti", "Kedi Maması", "Köpek Maması",
  "Yumuşatıcı", "Tablet", "Havlu Peçete", "ufuk"]

const List = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)
  const add = counter.count


  return (
    list.sort(),
    <View style={styles.viewStyle}>
      <FlatList style={{ flex: 1, margin: 5 }}
        data={list}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.touchableStyle} onPress={() => {
              if (counter.count.find(s => s == item) == item) {
                ToastAndroid.show(`${item} Eklenmiş`, ToastAndroid.SHORT
                )
              }
              else {
                dispatch(addItem(item));
              }
            } //counter.count = ([...(counter.count), item])
            }>
              <Text style={styles.textStyle}>{item}</Text>
            </TouchableOpacity>
          )
        }}>
      </FlatList >
    </View >
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 15,
    justifyContent: "center",
  },
  touchableStyle: {
    alignItems: "stretch",
    justifyContent: "center"
  },
  textStyle: {
    fontFamily: "Poppins-SemiBold",
    color: "black",
    fontSize: 15,
    backgroundColor: "#eaeaea",
    marginVertical: 2,
    padding: 10, borderRadius: 10
  }
})

export default List