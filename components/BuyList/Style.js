import { StyleSheet } from "react-native"

export const Style = StyleSheet.create({
    viewStyle: {
        flex: 15,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        borderRadius: 10
    },
    touchableStyle: {
        backgroundColor: "#FFE3BB",
        marginVertical: 2,
        marginHorizontal: 5,
        flex: 1,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 3,
        shadowOffset: { height: 7, width: 3 }
    },
    textStyle: {
        fontFamily: "Poppins-SemiBold",
        color: "black",
        fontSize: 13,
        padding: 10
    }
})