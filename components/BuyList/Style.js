import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  viewStyle: {
    flex: 15,
    justifyContent: 'center',
  },
  touchableStyle: {
    backgroundColor: 'white',
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
    color: 'black',
    fontSize: 13,
    paddingVertical: 10,
    paddingLeft: 5,
  },
});
