import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./src/metarial/Metarial";
import { Colors, Images } from "./src/metarial/Metarial";

let listData = Data.listData

const Slice = createSlice({
    name: "counter",
    initialState: {
        count: [],
        copyOfCount: [],
        controlList: [],
        numberList: [],
        colorState: false,
        alertText: false,
        currentFontColor: Colors.lightFontColor,
        currentViewColor: Colors.lightViewColor,
        currentContainerColor: Colors.lightContainerColor,
        currentDeleteIcon: Images.lightDelete,
        currentThemeIcon: Images.lightTheme,
        currentAddIcon: Images.lightAdd,
        currentCloseIcon: Images.lightClose,
        textInputButtonState: false,
        currentEditIcon: Images.lightEdit,
        currentRemoveIcon: Images.lightRemove
        //global değer
    },
    reducers: {
        addControlList(state, item) {
            state.controlList.push(item.payload)
        },
        addToList(state, newProduch) {
            state.count.push({ number: 1, product: newProduch.payload })
        },
        addCopyCount(state, newProduch) {
            state.copyOfCount.push(newProduch.payload)
            state.copyOfCount.sort()
        },
        inscreaseNumber(state, index) {
            state.numberList[index.payload]++
        },
        addNumberList(state, item) {
            state.numberList.push(item.payload)
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
                state.currentRemoveIcon = Images.darkRemove
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
                state.currentRemoveIcon = Images.lightRemove
            }
        },
        setThemeStyle(state, themeState) {
            state.colorState = themeState.payload
        },
        setThemeStyleState(state) {
            if (state.colorState == false) {
                state.currentContainerColor = Colors.darkContainerColor
                state.currentFontColor = Colors.darkFontColor
                state.currentViewColor = Colors.darkViewColor
                state.currentDeleteIcon = Images.darkDelete
                state.currentThemeIcon = Images.darkTheme
                state.currentAddIcon = Images.darkAdd
                state.currentCloseIcon = Images.darkClose
                state.currentEditIcon = Images.darkEdit
                state.currentRemoveIcon = Images.darkRemove
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
                state.currentRemoveIcon = Images.lightRemove
            }
        },
        setAlertText(state) {
            state.alertText = true
        },
        deleteListItem(state, index) {
            state.count.splice(index.payload, 1)
        },
        deleteCopyCount(state, index) {
            state.copyOfCount.splice(index.payload, 1)
        }
    }
})

export const {
    addNumberList,
    inscreaseNumber, setTextInputButtonState, deleteCopyCount,
    addControlList,inscreaseDataBuyList, deleteControlList, deleteNumberList,
    refresh,decreaseData, setAlertText,setNumberList, setCopyList, setList2, deleteListItem,
    setProductList,setColorState, addToList, addCopyCount,
    setThemeStyle, setThemeStyleState } = Slice.actions
export default Slice