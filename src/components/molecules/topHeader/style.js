import {Dimensions, StyleSheet} from 'react-native';
import { Colors, Fonts } from '../../../metarial/Metarial';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const Style = StyleSheet.create({
        container : {
            justifyContent:"space-between",
            alignItems: "center",
            flexDirection: "row",
            borderRadius:15,
            height:deviceHeight*.08,
            width:deviceWidth*.98,
            margin:2,
        },
        textStyle: {
            fontFamily: Fonts.projectFont,
            color: Colors.darkFontColor,
            fontSize: deviceWidth*.065,
            padding:5,
            marginLeft:10,
        },
        viewStyle:{
            height:deviceHeight*.07,
            width:deviceWidth*.98,
            margin:2
        },
        bottomStyle:{
            backgroundColor:Colors.darkFontColor, 
            flex:1, borderBottomRightRadius:10, 
            borderBottomLeftRadius:10
        }
    })