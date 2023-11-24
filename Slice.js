import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./src/metarial/Metarial";
import { useEffect } from "react";

const Slice = createSlice({

    name: "counter",
    initialState: {
        count: Data.listData, controlList: [], numberList: [] //global değer
    },
    reducers: {
        addControlList(state, item) {
            state.controlList.push(item.payload)
        },
        inscreaseNumber(state, index) {
            state.numberList[index.payload]++
        },
        addNumberList(state, item) {
            state.numberList.push(item.payload)
        },
        refresh(state) {
            state.buyList = []
            state.controlList = []
            state.numberList = []
        },
        decreaseData(state, index) {
            state.controlList.splice(index.payload ,1),
            state.numberList.splice(index.payload, 1)
            console.log(index.payload);
            console.log(state.numberList);
            console.log(state.controlList);
        }
    }
})

export const {
    addNumberList,
    inscreaseNumber,
    addControlList,
    inscreaseDataBuyList,
    refresh,
    decreaseData } = Slice.actions
export default Slice