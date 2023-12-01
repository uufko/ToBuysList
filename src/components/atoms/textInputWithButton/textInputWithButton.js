import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../../metarial/Metarial'
import { Style } from './style'

const TextInputWithButton = ({onChangeText, value, onPress}) => {
    return (
        <View style={Style.viewStyle}>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                style={Style.textInputStyle}
                placeholder='Ürün giriniz'
                placeholderTextColor={Colors.darkFontColor} />
            <TouchableOpacity onPress={onPress}
                style={Style.touchableStyle}>
                <Text style={Style.textStyle}>Ekle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TextInputWithButton