import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
const img = require('../../assets/images/1610958.png')
const search = require('../../assets/images/m2i8K9b1G6K9m2N4.png')
import { Style } from './Style'

const Header = ({ toAdd, setState, state }) => {
  return (
    <View style={Style.container}>
      <Text style={Style.textStyle}>Alınacaklar Listesi</Text>

      <TouchableOpacity onPress={() => {
        toAdd.splice(0, toAdd.length)
        setState(!state)
      }} ><Image
          style={Style.ImageStyle}
          source={img} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
          style={Style.ImageStyle}
          source={search} />
      </TouchableOpacity>

    </View>
  )
}


export default Header