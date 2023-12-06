import { StyleSheet,Dimensions } from "react-native";
import { Colors, Fonts } from "../../../metarial/Metarial";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export const Style = StyleSheet.create({
    viewStyle:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        
    },
    touchableStyle:{
        height:deviceWidth*.12, 
        width:deviceWidth*.2 , 
        backgroundColor:Colors.darkFontColor,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        justifyContent:"center", alignItems:"center",
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 2,
        shadowOffset: { height: 7, width: 3 },
    },
    textInputStyle:{
        height:deviceWidth*.12, 
        width:deviceWidth*.7 , 
        borderColor:Colors.darkFontColor,
        backgroundColor:Colors.darkViewColor,
        paddingLeft:10,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        fontFamily:Fonts.projectFont,
        fontSize:13, color:Colors.darkFontColor
    },
    textStyle:{
        fontFamily:Fonts.projectFont
    }
})