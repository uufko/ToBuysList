import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { addItemBuyList, inscreaseDataBuyList, addControlList, inscreaseNumber, addNumberList } from '../../Slice';
import { useSelector, useDispatch } from 'react-redux';
import { Style } from './Style';

const List = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const List = counter.count;
  const controlList = counter.controlList

  return (
    (
      <View style={Style.viewStyle}>
        <FlatList
          style={{ flex: 1, marginHorizontal: 5 }}
          data={List}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={Style.touchableStyle}
                onPress={
                  () => {

                    if (counter.controlList.find(s => s == item.product)) {
                      const sonuc = controlList.find(e => e == item.product) //product ve number 
                      const index = controlList.indexOf(sonuc) //index
                      dispatch(inscreaseNumber(index))
                    }
                    else {
                      dispatch(addControlList(item.product))
                      dispatch(addNumberList(item.number))
                    }
                  }
                }>
                <View
                  style={{
                    backgroundColor: '#9739e1',
                    flex: 1,
                    height: '100%',
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></View>
                <View
                  style={{
                    flex: 27,
                    justifyContent: 'center',
                    alignItems: 'start',
                  }}>
                  <Text style={Style.textStyle}>{item.product}</Text>
                </View>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
    )
  );
};

export default List;
