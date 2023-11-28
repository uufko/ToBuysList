import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  Button,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { addControlList, inscreaseNumber, addNumberList } from '../../Slice';
import { useSelector, useDispatch } from 'react-redux';
import { Style } from './Style';
import { Colors, Images } from '../../src/metarial/Metarial';

const List = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const List = counter.count;
  const controlList = counter.controlList
  const [visible, setVisible] = useState(false)
  const [newProduct, setNewProduct] = useState("")

  return (
    <View style={Style.viewStyle}>
      <FlatList
        style={{ flex: 1, marginHorizontal: 5 }}
        data={List}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[Style.touchableStyle, {backgroundColor:counter.currentViewColor}]}
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
                  backgroundColor: counter.currentFontColor,
                  flex: 1,
                  height: '100%',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
              <View
                style={{
                  flex: 20,
                  justifyContent: 'center',
                  alignItems: 'start',
                }}>
                <Text style={[Style.textStyle, {color: counter.currentFontColor}]}>{item.product}</Text>
              </View>
            </TouchableOpacity>
          );
        }}></FlatList>
        <TouchableOpacity onPress={()=> setVisible(true)} style={{position:"absolute" ,  right:10, bottom:10}}>
          <Image source={Images.addButton} style={{height:70, width:70, resizeMode:"stretch"}}/>
        </TouchableOpacity> 
        <Modal transparent={true} visible={visible} animationType="slide">
          <TouchableOpacity onPress={()=> setVisible(false)} style={{justifyContent:"center", alignItems:"center", flex:1}}>
            <View style={{height:500, width:300,borderWidth:1, borderColor:"black", backgroundColor:"white", padding:2}}>
              <Text>ufuk</Text>
              <TextInput 
              onChangeText={(e)=>{
                setNewProduct(e)
              }}
              value={newProduct} placeholder='Ürün giriniz' style={{borderWidth:1 , borderRadius:5}}/>
              <Button onPress={()=> {
                let aaalist = []
                aaalist = [...aaalist , newProduct]
                console.log(aaalist);
              }} title='listeye ekle'></Button>
            </View>
          </TouchableOpacity>
        </Modal>
    </View>

  );
};

export default List;
