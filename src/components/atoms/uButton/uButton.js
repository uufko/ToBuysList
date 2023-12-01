import { TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Style } from './style'
import { Images } from '../../../metarial/Metarial'

const UButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Style.touchableStyle}>
      <Image source={Images.addButton} style={Style.imageStyle} />
    </TouchableOpacity>
  )
}

export default UButton