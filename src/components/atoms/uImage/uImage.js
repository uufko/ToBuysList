import { View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'

const UImage = ({imageSource,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={imageSource} style={Style.ImageStyle}/>
    </TouchableOpacity>
  )
}

export default UImage