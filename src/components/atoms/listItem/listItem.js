import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'
import UImage from '../uImage/uImage'
import { Images } from '../../../metarial/Metarial'

const FlatListItem = ({text,onPress, listDeleteIconVisible,listDeleteIconPressed}) => {
    return (
        <TouchableOpacity onPress={onPress} style={Style.touchableStyle}>
            <View
                style={Style.leftViewStyle}></View>
            <View
                style={Style.viewStyle}>
                <Text style={Style.textStyle}>{text}</Text>
                {listDeleteIconVisible && <UImage onPress={listDeleteIconPressed} imageSource={Images.listDeleteIcon}/>}
            </View>
        </TouchableOpacity>
    )
}

export default FlatListItem