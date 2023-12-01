import { View, Text } from 'react-native'
import React from 'react'
import { Style } from './style'
import UImage from '../../atoms/uImage/uImage'
import { Colors, Images } from '../../../metarial/Metarial'
import { useDispatch } from 'react-redux';
import { refresh } from '../../../../Slice'

const ModalHeader = ({ headerText }) => {
  const dispatch = useDispatch();

  return (
    <View style={Style.container}>
      <View style={{ flex: 6, }}>
        <Text style={Style.textStyle}>{headerText}</Text>
      </View>
      <View style={{ flex: 1, }}>
        <UImage imageSource={Images.editButton} onPress={() => dispatch(refresh())} />
      </View>
    </View>
  )
}

export default ModalHeader