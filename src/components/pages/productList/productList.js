import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import ListHeader from '../../molecules/listHeader/listHeader'
import { useSelector, useDispatch } from 'react-redux';
import FlatListItem from '../../atoms/listItem/listItem';
import { addToList, addCopyCount, setAlertText, addControlList, addNumberList, inscreaseNumber,  deleteListItem, deleteCopyCount } from '../../../../Slice';
import TextInputWithButton from '../../atoms/textInputWithButton/textInputWithButton';

const ProductList = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const List = counter.count;
  const controlList = counter.controlList
  const [newProduct, setNewProduct] = useState("")
  const copyCount = counter.copyOfCount
  const [listDeleteIcon, setListDeleteIcon] = useState(false)
  const [addProductWindow, setAddProductWindow] = useState(false)
  return (
    <View>


      <ListHeader
        onPress={() => setListDeleteIcon(!listDeleteIcon)}
        headerText={"Listem"} 
        addButtonPressed={() => {
          setAddProductWindow(!addProductWindow)
        }} />
      {addProductWindow && <TextInputWithButton
        onChangeText={(e) => {
          setNewProduct(e)
        }}
        value={newProduct}
        onPress={() => {
          if (copyCount.find(s => s == newProduct) == newProduct) {
            //Alert.alert(`${newProduct} zaten eklenmiş`)
            ToastAndroid.showWithGravity
              (`${newProduct} zaten eklenmiş`,
                ToastAndroid.LONG,
                ToastAndroid.CENTER)

            dispatch(setAlertText())
            //setButtonPressed(true)
          }
          else if (newProduct == "") {
          }
          else {
            dispatch(addToList(newProduct))
            dispatch(addCopyCount(newProduct))
            setNewProduct("")
          }
        }}
      />}
      <FlatList
        data={List}
        renderItem={({ item }) => {
          return (
            <FlatListItem listDeleteIconPressed={() => {
              const index = List.indexOf(item)
              dispatch(deleteListItem(index))
              dispatch(deleteCopyCount(index))
            }}
              listDeleteIconVisible={listDeleteIcon}
              text={item.product}
              onPress={() => {
                if (counter.controlList.find(s => s == item.product)) {
                  const sonuc = controlList.find(e => e == item.product) //product ve number 
                  const index = controlList.indexOf(sonuc) //index
                  dispatch(inscreaseNumber(index))
                }
                else {
                  dispatch(addControlList(item.product))
                  dispatch(addNumberList(item.number))
                }
              }} 
              />
          )
        }}
      />
    </View>
  )
}

export default ProductList