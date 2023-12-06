import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'
import UImage from '../uImage/uImage'
import { Images } from '../../../metarial/Metarial'

import { useDispatch, useSelector } from 'react-redux';
const FlatListItem = ({text,onPress, listDeleteIconVisible,listDeleteIconPressed}) => {
    
  const counter = useSelector(state => state.counter);
    return (
        <TouchableOpacity onPress={onPress} style={[Style.touchableStyle,{backgroundColor:counter.currentViewColor}]}>
            <View
                style={[Style.leftViewStyle,{backgroundColor:counter.currentFontColor}]}></View>
            <View
                style={Style.viewStyle}>
                <Text style={[Style.textStyle, {color:counter.currentFontColor}]}>{text}</Text>
                {listDeleteIconVisible && <UImage onPress={listDeleteIconPressed} imageSource={Images.lightRemove}/>}
            </View>
        </TouchableOpacity>
    )
}

export default FlatListItem