import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addToList, addCopyCount, setAlertText } from '../../Slice';
import { useSelector, useDispatch } from 'react-redux';
import { Style } from './Style';
import UButton from '../../src/components/atoms/uButton/uButton';
import UModal from '../../src/components/atoms/uModal/uModal';

const List = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const copyCount = counter.copyOfCount
  const [modalVisible, setModalVisible] = useState(false)
  const [newProduct, setNewProduct] = useState("")
  const [buttonPressed, setButtonPressed] = useState(false)

  useEffect(() => {
    setButtonPressed(false)
  }, [newProduct])

  return (
    <View style={Style.viewStyle}>
      {/* <UButton onPress={() => setModalVisible(true)} /> */}
      {modalVisible && <UModal
        textFunc={buttonPressed && counter.alertText ? `${newProduct} Listende Var` : "Listeye Ekle"}
        closeModal={() => setModalVisible(false)}
        textInputFunc={(e) => {
          setNewProduct(e)
        }}
        value={newProduct}
        closeButtonPressed={() => setModalVisible(false)}
        addButtonPressed={() => {
          if (copyCount.find(s => s == newProduct) == newProduct) {
            //Alert.alert(`${newProduct} zaten eklenmiş`)1
            dispatch(setAlertText())
            setButtonPressed(true)
          }
          else if (newProduct == "") {
          }
          else {
            dispatch(addToList(newProduct))
            dispatch(addCopyCount(newProduct))
            setNewProduct("")
          }
        }} />}
    </View>
  );
};

export default List;
