import {Dimensions, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const Style = StyleSheet.create({
        touchableStyle:{ 
            position: "absolute", 
            right: deviceHeight*.02, 
            bottom: deviceHeight*.01 },
        imageStyle:{ 
            height: deviceHeight*.1, 
            width: deviceHeight*.1, 
            resizeMode: "stretch" }
    })