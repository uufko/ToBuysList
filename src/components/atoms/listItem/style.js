import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../metarial/Metarial";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const Style = StyleSheet.create({
    touchableStyle: {
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: Colors.darkViewColor,
        height:deviceHeight*.06,
        marginVertical:2, margin:5
    },
    viewStyle: {
        flex: 20,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row"
    },
    leftViewStyle: {
        backgroundColor: Colors.darkFontColor,
        flex: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    textStyle: {
        fontFamily: "Poppins-SemiBold",
        color: Colors.darkFontColor,
        fontSize: 13,
        paddingLeft:10,
    },

})