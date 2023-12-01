import {Dimensions, StyleSheet} from 'react-native';
import { Colors } from '../../../metarial/Metarial';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const Style = StyleSheet.create({
        container : {
            justifyContent:"space-between",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor:"#0a0a0a",
            shadowColor: "black",
            shadowOpacity: .5,
            elevation: 10,
            shadowOffset: { height: 7, width: 3 },
            borderRadius:10,
            height:deviceHeight*.07,
            width:deviceWidth*.95,
            marginHorizontal:10
        },
        textStyle: {
            fontFamily: "Poppins-SemiBold",
            color: Colors.darkFontColor,
            fontSize: 20,
            padding:5,
        }
    })