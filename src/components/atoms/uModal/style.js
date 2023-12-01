import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../metarial/Metarial';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const Style = StyleSheet.create({
    modalStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    modal: {
        width: deviceWidth,
        height: deviceHeight * .6,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderWidth: 1,
        backgroundColor: Colors.darkContainerColor, alignItems: "center"
    },
    textInputStyle: {
        color: Colors.darkFontColor,
        backgroundColor: Colors.darkViewColor,
        borderWidth: 1, borderRadius: 5,
        width: '100%',
        width: deviceWidth*.7,
        height: deviceHeight * .06,
        borderRadius:50,
        paddingLeft:15,
    },
    flatListStyle:{
        height: deviceHeight * .07,
        width: deviceWidth * .9,
    }
})