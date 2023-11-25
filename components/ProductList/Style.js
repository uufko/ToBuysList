import { StyleSheet } from "react-native";
  
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
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 13,
        marginVertical: 2,
        padding: 10, 
        
    }
})