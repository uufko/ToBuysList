import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { decreaseData } from '../../Slice';
import { useSelector, useDispatch } from 'react-redux';
import { Style } from './Style';
const BuyList = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  let controlList = counter.controlList
  return (
    <View style={Style.viewStyle}>
      <FlatList
        style={{ flex: 1, marginVertical: 2 }}
        data={controlList}
        horizontal={false}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                const index = controlList.indexOf(item);
                dispatch(decreaseData(index));
              }}
              style={Style.touchableStyle}>
              <View
                style={{
                  backgroundColor: '#9739e1',
                  flex: 2,
                  height: 50,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold' }}>
                  {counter.numberList[controlList.indexOf(item)]}
                </Text>
              </View>
              <View
                style={{
                  flex: 12,
                  justifyContent: 'center',
                  alignItems: 'start',
                }}>
                <Text style={Style.textStyle}>{item}</Text>
              </View>
            </TouchableOpacity>
          )
        }}></FlatList>
    </View>
  );
};
export default BuyList;
