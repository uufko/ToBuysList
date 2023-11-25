import { StyleSheet } from "react-native"



export const Style = StyleSheet.create({
    container : {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor:"#0a0a0a",
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 10,
        shadowOffset: { height: 7, width: 3 },
        borderRadius:10,
        margin:2
    },
    textStyle: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 20,
        padding:5
    },
    ImageStyle: {
        height: 30,
        width: 30,
        resizeMode: "contain"
    }
})
