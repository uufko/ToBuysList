import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'

const UButtonWithText = ({text ,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Style.touchableStyle}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default UButtonWithText