import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { deleteItem } from '../../Slice'
import { useSelector, useDispatch } from 'react-redux';
import { Style } from './Style';

const BuyList = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)
  const buyList = counter.count

  return (
    <View style={Style.viewStyle}>
      <FlatList style={{ flex: 1, marginVertical: 2 }}
        data={buyList}
        horizontal={false}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {
              const index = buyList.indexOf(item)
              const lengt = buyList.length
              dispatch(deleteItem(index))
            }} 
            style={Style.touchableStyle}>
              <Text style={Style.textStyle}>{item}</Text>
            </TouchableOpacity>
          )
        }}>
      </FlatList>
    </View>
  )
}

export default BuyList