import { View, Text } from 'react-native'
import React from 'react'
import { Style } from './style'
import UImage from '../uImage/uImage'
import { Images } from '../../../metarial/Metarial'
import { useDispatch} from 'react-redux';
import { refresh, setColorState } from '../../../../Slice'

const UHeader = ({headerText}) => {
  const dispatch = useDispatch();

  return (
    <View style={Style.container}>
      <View style={{flex:5}}>
      <Text style={Style.textStyle}>{headerText}</Text>
      </View>
      <View style={{flex:2,flexDirection:"row", marginHorizontal:10, justifyContent:"space-between"}}>
      <UImage imageSource={Images.darkThemeIcon} onPress={()=>dispatch(setColorState())}/>
      </View>
    </View>
  )
}

export default UHeader