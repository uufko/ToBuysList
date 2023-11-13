import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'


const BuyList = ({toAdd , setToAdd}) => {
  return (
    <View style={styles.viewStyle}>
        <FlatList style={{ flex: 1 }}
          data={toAdd}
          horizontal={false}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {
                const index = toAdd.indexOf(item)
                const lengt = toAdd.length
                console.log(item, index, lengt)
                setToAdd(toAdd.filter(({deleteItem}) =>( {deleteItem}) !== ({item})))

              }} style={styles.touchableStyle}>
                <Text style={styles.textStyle}>{item}</Text>
              </TouchableOpacity>
            )
          }}>
        </FlatList>
      </View>
  )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 15,
        borderColor: "black",
        borderWidth: 1,
        justifyContent:"center",
      },
      touchableStyle: {
        backgroundColor: "#eaeaea",
        marginVertical: 2,
        marginHorizontal: 10,
        flex: 1,
        borderRadius: 15,
        alignItems: "center",
        justifyContent:"center",
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 3,
        shadowOffset: { height: 7, width: 3 }
      },
      textStyle:{ fontFamily: "Poppins-SemiBold", color: "black", fontSize: 14, padding: 10 }
})

export default BuyList