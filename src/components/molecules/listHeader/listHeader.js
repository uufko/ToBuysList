import { View, Text } from 'react-native'
import React from 'react'
import { Style } from './../topHeader/style'
import UImage from '../../atoms/uImage/uImage'
import { Colors, Images } from '../../../metarial/Metarial'
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from '../../../../Slice'



const ListHeader = ({ headerText ,onPress,addButtonPressed}) => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);
  return (
    <View style={[Style.container,{backgroundColor:counter.currentViewColor}]}>
      <View style={{ flex: 6, }}>
        <Text style={[Style.textStyle,{color:counter.currentFontColor}]}>{headerText}</Text>
      </View>
      <View style={{ flex: 2, flexDirection:"row" , justifyContent:"space-around" }}>
      <UImage imageSource={counter.currentEditIcon} onPress={onPress} />
        <UImage imageSource={counter.currentAddIcon} onPress={addButtonPressed}/>
        
      </View>
    </View>
  )
}

export default ListHeader