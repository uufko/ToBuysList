import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { deleteItem } from '../../Slice'
import { useSelector, useDispatch } from 'react-redux';


const BuyList = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)
  const list1 = counter.count

  return (
    <View style={styles.viewStyle}>
      <FlatList style={{ flex: 1 }}
        data={list1}
        horizontal={false}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {
              const index = list1.indexOf(item)
              const lengt = list1.length
              console.log(item, index, lengt)
              console.log(list1);
              dispatch(deleteItem(index))
              //setState1(list1.filter(({deleteItem}) =>( {deleteItem}) !== ({item})))
              console.log("delete item ", list1);

            }} style={styles.touchableStyle}>
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
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
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
  },
  textStyle: { fontFamily: "Poppins-SemiBold", color: "black", fontSize: 14, padding: 10 }
})

export default BuyList