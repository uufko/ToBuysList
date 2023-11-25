import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./src/metarial/Metarial";

let listData = Data.listData

const Slice = createSlice({
    name: "counter",
    initialState: {
        count: listData, controlList: [], numberList: [] //global değer
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
            state.numberList[index.payload]--
            if (state.numberList[index.payload] == 0) {
                state.controlList.splice(index.payload, 1),
                    state.numberList.splice(index.payload, 1)
            }

        },
        setNumberList(state, data ) {
            state.numberList = data.payload
        },
        setProductList(state, data) {
            state.controlList = data.payload
        }
    }
})

export const {
    addNumberList,
    inscreaseNumber,
    addControlList,
    inscreaseDataBuyList,
    refresh,
    decreaseData,
    setNumberList,
    setProductList } = Slice.actions
export default Slice