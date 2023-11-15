import { createSlice } from "@reduxjs/toolkit";

import { ToastAndroid } from "react-native";

const Slice = createSlice({
    name: "counter",
    initialState: {
        count: [], status: false     //global değer
    },
    reducers: {
        inscrease(state) { //arttırmak istersek
            state.count++;
        },
        decrease(state) { //azaltmak istersek
            state.count--
        },
        refresh(state) { //başlangıç değeri
            state.count = [];
        },
        addItem(state, item) {
            state.count.push(item.payload) //arraya eleman ekleme
        },
        setState(state, item) {
            state.count = [...state.count, item.payload] //arraya eleman ekleme
        },
        deleteItem(state, index) {
            state.count.splice(index.payload ,1 ) //array eleman çıkarma
        },
        addItem2(state, data){
            state.count = data.payload
        }


    }
})

export const { addItem, deleteItem,refresh, setData2, addItem2 } = Slice.actions
export default Slice