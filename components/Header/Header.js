import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Style } from './Style'
import { useDispatch } from 'react-redux';
import { refresh } from '../../Slice'
import { Images } from '../../src/metarial/Metarial'

const Header = ({ remove }) => {
  const dispatch = useDispatch();

  return (
    <View style={Style.container}>
      <Text style={Style.textStyle}>Alınacaklar Listesi</Text>
      <TouchableOpacity onPress={() => {
        dispatch(refresh())
      }}>
        <Image
          style={Style.ImageStyle}
          source={Images.deleteIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={remove} >
        <Image
          style={Style.ImageStyle}
          source={Images.searchIcon} />
      </TouchableOpacity>
    </View>
  )
}

export default Header