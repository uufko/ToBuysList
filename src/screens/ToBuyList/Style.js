import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'colums',
    padding: 2,
    backgroundColor: '#f2f1f6',
  },
  viewStyle: {
    flex: 15,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 1,
  },
  touchableStyle: {
    backgroundColor: '#A3B763',
    marginVertical: 2,
    marginHorizontal: 10,
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 3,
    shadowOffset: {height: 7, width: 3},
  },
});
