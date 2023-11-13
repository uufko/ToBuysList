import { View, Text, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'

const list = ["Elma", "Armut", "Tavuk", "Salça", "Erik", "Et", "Tereyağı", "Zeytin", "Sabun",
  "Makarna", "Bulgur", "Islak mendil", "Su", "Süt", "Peynir", "Deterjan", "Domates", "Pirinç",
  "Soğan", "Patates", "Yoğurt", "Defter", "Kalem", "Çöp Poşeti", "Kedi Maması", "Köpek Maması", 
  "Yumuşatıcı", "Tablet", "Havlu Peçete"]

const List = ({ toAdd, setToAdd }) => {

  return (
    list.sort(),
    <View style={styles.viewStyle}>
      <FlatList style={{ flex: 1, margin: 5 }}
        data={list}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.touchableStyle} onPress={() => {
              if (toAdd.find(s => s == item) == item) {
                ToastAndroid.show("Eklenmiş", ToastAndroid.SHORT)
              }
              else { setToAdd([...toAdd, item]) }
            }
            }>
              <Text style={styles.textStyle}>{item}</Text>
            </TouchableOpacity>
          )
        }}>
      </FlatList>
      </View>
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