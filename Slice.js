import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./src/metarial/Metarial";
import { Colors, Images } from "./src/metarial/Metarial";

let listData = Data.listData

const Slice = createSlice({
    name: "counter",
    initialState: {
        count: [],
        copyOfCount:[],
        controlList: [],
        numberList: [],
        colorState: false,
        alertText : false,
        currentFontColor: Colors.lightFontColor,
        currentViewColor: Colors.lightViewColor,
        currentContainerColor: Colors.lightContainerColor,
        currentDeleteIcon: Images.lightDelete,
        currentThemeIcon: Images.lightTheme,
        currentAddIcon: Images.lightAdd,
        currentCloseIcon: Images.lightClose,
        textInputButtonState: false,
        currentEditIcon: Images.lightEdit
        //global değer
    },
    reducers: {
        addControlList(state, item) {
            state.controlList.push(item.payload)
            console.log(state.controlList);
        },
        addToList(state,newProduch){
            state.count.push({number:1, product:newProduch.payload})
        },
        addCopyCount(state,newProduch){
            state.copyOfCount.push(newProduch.payload)
        },
        inscreaseNumber(state, index) {
            state.numberList[index.payload]++
        },
        addNumberList(state, item) {
            state.numberList.push(item.payload)
            console.log(state.numberList);
        },
        
        refresh(state) {
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
        setNumberList(state, data) {
            state.numberList = data.payload
        },
        setProductList(state, data) {
            state.controlList = data.payload
        },
        //
        setList2(state, data) {
            state.count = data.payload
        },
        setCopyList(state, data) {
            state.copyOfCount = data.payload
        },
        //
        setColorState(state) {
            state.colorState = !state.colorState
            if (state.colorState == false) {
                state.currentContainerColor = Colors.darkContainerColor
                state.currentFontColor = Colors.darkFontColor
                state.currentViewColor = Colors.darkViewColor
                state.currentDeleteIcon = Images.darkDelete
                state.currentThemeIcon = Images.darkTheme
                state.currentAddIcon = Images.darkAdd
                state.currentCloseIcon = Images.darkClose
                state.currentEditIcon = Images.darkEdit
            }
            else {
                state.currentFontColor = Colors.lightFontColor,
                state.currentViewColor = Colors.lightViewColor,
                state.currentContainerColor = Colors.lightContainerColor
                state.currentDeleteIcon = Images.lightDelete
                state.currentThemeIcon = Images.lightTheme
                state.currentAddIcon = Images.lightAdd
                state.currentCloseIcon = Images.lightClose
                state.currentEditIcon = Images.lightEdit
            }
        },
        setThemeStyle(state,themeState){
            state.colorState = themeState.payload
        },
        setThemeStyleState(state){
            if (state.colorState == false) {
                state.currentContainerColor = Colors.darkContainerColor
                state.currentFontColor = Colors.darkFontColor
                state.currentViewColor = Colors.darkViewColor
                state.currentDeleteIcon = Images.darkDelete
                state.currentThemeIcon = Images.darkTheme
                state.currentAddIcon = Images.darkAdd
                state.currentCloseIcon = Images.darkClose
                state.currentEditIcon = Images.darkEdit
            }
            else {
                state.currentFontColor = Colors.lightFontColor,
                state.currentViewColor = Colors.lightViewColor,
                state.currentContainerColor = Colors.lightContainerColor
                state.currentDeleteIcon = Images.lightDelete
                state.currentThemeIcon = Images.lightTheme
                state.currentAddIcon = Images.lightAdd
                state.currentCloseIcon = Images.lightClose
                state.currentEditIcon = Images.lightEdit
            }
        },
        setAlertText(state){
            state.alertText=true
        },
        deleteListItem(state, index){
            console.log(index.payload);
            state.count.splice(index.payload, 1)
        },
        deleteControlList(state, index){
            console.log(index.payload);
            
        },
        deleteNumberList(state, index){
            console.log(index.payload);
        }
    }
})

export const {
    addNumberList,
    inscreaseNumber, setTextInputButtonState,
    addControlList,
    inscreaseDataBuyList, deleteControlList, deleteNumberList,
    refresh,
    decreaseData, setAlertText,
    setNumberList, setCopyList, setList2, deleteListItem,
    setProductList,
    setColorState, addToList, addCopyCount,
setThemeStyle,setThemeStyleState } = Slice.actions
export default Slice