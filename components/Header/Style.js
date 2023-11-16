import { StyleSheet } from "react-native"

export const Style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    textStyle: {
        fontFamily: "Poppins-SemiBold",
        color: "black",
        fontSize: 25,
        padding:5
    },
    ImageStyle: {
        height: 30,
        width: 30,
        resizeMode: "contain"
    }
})
