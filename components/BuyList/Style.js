import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  container: {
    flex: 15,
    justifyContent: 'center',
  },
  touchableStyle: {
    backgroundColor: '#0a0a0a',
    marginVertical: 2,
    marginHorizontal: 4,
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 3,
    shadowOffset: {height: 7, width: 3},
    flexDirection: 'row',
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
    flex: 2,
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
