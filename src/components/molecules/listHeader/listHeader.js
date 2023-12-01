import { View, Text } from 'react-native'
import React from 'react'
import { Style } from './../topHeader/style'
import UImage from '../../atoms/uImage/uImage'
import { Colors, Images } from '../../../metarial/Metarial'
import { useDispatch } from 'react-redux';
import { refresh } from '../../../../Slice'

const ListHeader = ({ headerText ,onPress,addButtonPressed}) => {
  const dispatch = useDispatch();

  return (
    <View style={Style.container}>
      <View style={{ flex: 6, }}>
        <Text style={Style.textStyle}>{headerText}</Text>
      </View>
      <View style={{ flex: 2, flexDirection:"row" , justifyContent:"space-around" }}>
        <UImage imageSource={Images.addButton} onPress={addButtonPressed}/>
        <UImage imageSource={Images.editButton} onPress={onPress} />
      </View>
    </View>
  )
}

export default ListHeader