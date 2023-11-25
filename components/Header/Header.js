import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Style } from './Style'
import { useDispatch ,useSelector} from 'react-redux';
import { refresh, setColorState } from '../../Slice'

const Header = ({ remove }) => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <View style={[Style.container, {backgroundColor: counter.currentViewColor}]}>
      <Text style={[Style.textStyle, {color : counter.currentFontColor}]}>Alınacaklar Listesi</Text>
      <TouchableOpacity onPress={() => {
        dispatch(refresh())
      }}>
        <Image
          style={Style.ImageStyle}
          source={counter.currentDeleteIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={remove} >
        <Image
          style={Style.ImageStyle}
          source={counter.currentSearchIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{ dispatch(setColorState())}} >
        <Image
          style={Style.ImageStyle}
          source={counter.currentThemeIcon} />
      </TouchableOpacity>
    </View>
  )
}

export default Header