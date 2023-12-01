import { View, Text, Button } from 'react-native'
import React from 'react'
import { Style } from './style'
import UImage from '../../atoms/uImage/uImage'
import { Colors, Images } from '../../../metarial/Metarial'
import { useDispatch} from 'react-redux';
import { refresh, setColorState } from '../../../../Slice'

const TopHeader = ({headerText, removeAllData}) => {
  const dispatch = useDispatch();

  return (
    <View style={Style.container}>
      <View style={{flex:5}}>
      <Text style={Style.textStyle}>{headerText}</Text>
      </View>
      <View style={{flex:2,flexDirection:"row", marginHorizontal:10, justifyContent:"space-between"}}>
      <UImage imageSource={Images.darkDeleteIcon} onPress={()=>dispatch(refresh())} />
      <UImage imageSource={Images.darkThemeIcon} onPress={()=>dispatch(setColorState())}/>
      <UImage imageSource={Images.closeButton} onPress={removeAllData}/>
      </View>
    </View>
  )
}

export default TopHeader