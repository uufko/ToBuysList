import { View, Text, Button } from 'react-native'
import React from 'react'
import { Style } from './style'
import UImage from '../../atoms/uImage/uImage'
import { Colors, Images } from '../../../metarial/Metarial'
import { useDispatch, useSelector} from 'react-redux';
import { refresh, setColorState, setThemeStyle } from '../../../../Slice'

const TopHeader = ({headerText, removeAllData}) => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  return (
    <View style={[Style.container, {backgroundColor:counter.currentViewColor}]}>
      <View style={{flex:5}}>
      <Text style={[Style.textStyle,{color:counter.currentFontColor}]}>{headerText}</Text>
      </View>
      <View style={{flex:2,flexDirection:"row", marginHorizontal:10, justifyContent:"space-between"}}>
      <UImage imageSource={counter.currentDeleteIcon} onPress={()=>
        dispatch(refresh())
        } />
      <UImage imageSource={counter.currentThemeIcon} onPress={()=>
        dispatch(setColorState())}/>
      </View>
    </View>
  )
}

export default TopHeader