import { View, Text, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
const img = require('../../assets/images/1610958.png')
const search = require('../../assets/images/m2i8K9b1G6K9m2N4.png')
import { Style } from './Style'
import { useSelector, useDispatch } from 'react-redux';
import { refresh } from '../../Slice'

const Header = ({ remove }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)

  return (
    <View style={Style.container}>
      <Text style={Style.textStyle}>Alınacaklar Listesi</Text>

      <TouchableOpacity onPress={() => {
        dispatch(refresh())
      }}>
        <Image
          style={Style.ImageStyle}
          source={img} />
      </TouchableOpacity>
      <TouchableOpacity onPress={remove} >
        <Image
          style={Style.ImageStyle}
          source={search} />
      </TouchableOpacity>
      <Button onPress={() => { console.log(counter.count); }} title='ufuk'></Button>

    </View>
  )
}


export default Header