import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { decreaseData } from '../../Slice';
import { useSelector, useDispatch } from 'react-redux';
import { Style } from './Style';

const BuyList = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const controlList = counter.controlList
  const numberList = counter.numberList
  return (
    <View style={Style.container}>
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
              style={[Style.touchableStyle, {backgroundColor:counter.currentViewColor}]}>
              <View
                style={[Style.viewStyle, {backgroundColor:counter.currentFontColor}]}>
                <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold' }}>
                  {numberList[controlList.indexOf(item)]}
                </Text>
              </View>
              <View
                style={{
                  flex: 12,
                  justifyContent: 'center',
                  alignItems: 'start',
                }}>
                <Text style={[Style.textStyle, {color:counter.currentFontColor}]}>{item}</Text>
              </View>
            </TouchableOpacity>
          )
        }}></FlatList>
    </View>
  );
};
export default BuyList;
