import {StyleSheet, Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const Style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height:deviceHeight*.5,
    width:deviceWidth, flex:1
  },
  touchableStyle: {
    backgroundColor: '#0a0a0a',
    marginVertical: 2,
    marginHorizontal: 4,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 3,
    shadowOffset: {height: 7, width: 3},
    flexDirection: 'row', 
    flex:15,
    height:deviceHeight*.07
    
  },
  textStyle: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 13,
    paddingVertical: 10,
    paddingLeft: 5,
  },
  viewStyle:{
    backgroundColor: '#21c063',
    height: deviceHeight*.07,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width:deviceWidth*.05,
    
  }
});
