import { StyleSheet ,Dimensions} from "react-native";
import { Colors } from "../../../metarial/Metarial";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const Style = StyleSheet.create({
    touchableStyle:{
        backgroundColor:Colors.darkFontColor,
        height:deviceHeight*.05,
        width:deviceWidth*.5,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10

    }
})