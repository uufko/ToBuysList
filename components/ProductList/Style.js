import { Dimensions, StyleSheet } from "react-native";
import { Fonts } from "../../src/metarial/Metarial";
  
const deviceHeight = Dimensions.get('window').height;
export const Style = StyleSheet.create({

    viewStyle: {
        flex: 1,
        justifyContent: "center",
    },
    touchableStyle: {
        alignItems: "stretch",
        flex:1,
        flexDirection:"row",
        borderRadius: 10,
        marginVertical:2,
        backgroundColor:"black"
    },
    textStyle: {
        fontFamily: Fonts.projectFont,
        color: "white",
        fontSize: deviceHeight*.04,
        marginVertical: 2,
        padding: 10, 
        
    }
})