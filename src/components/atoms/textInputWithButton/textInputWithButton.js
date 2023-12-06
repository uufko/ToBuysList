import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../../metarial/Metarial'
import { Style } from './style'
import UImage from '../uImage/uImage'
import { useDispatch, useSelector} from 'react-redux';

const TextInputWithButton = ({ onChangeText, value, onPress }) => {
    
  const counter = useSelector(state => state.counter);
    return (
        <View style={Style.viewStyle}>
            <TextInput
                maxLength={20}
                onChangeText={onChangeText}
                value={value}
                style={[Style.textInputStyle, {backgroundColor:counter.currentViewColor}]}
                placeholder='Ürün giriniz'
                placeholderTextColor={counter.currentFontColor} />
            <TouchableOpacity onPress={onPress}
                style={[Style.touchableStyle,{backgroundColor:counter.currentFontColor}]}>
                <Text style={[Style.textStyle, {color:counter.currentViewColor}]}>Ekle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TextInputWithButton