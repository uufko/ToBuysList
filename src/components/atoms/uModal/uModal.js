import { View, Modal, TextInput, FlatList } from 'react-native'
import { Style } from './style'
import ModalHeader from '../../molecules/modalHeader/modalHeader'
import { Colors, Images } from '../../../metarial/Metarial'
import UImage from '../uImage/uImage'
import FlatListItem from '../listItem/listItem'
import { useSelector, useDispatch } from 'react-redux';
import { addControlList, inscreaseNumber, addNumberList } from '../../../../Slice';
import UButtonWithText from '../uButtonWithText/uButtonWithText'

const UModal = ({ addButtonPressed, closeButtonPressed, textInputFunc, value, closeModal, textFunc }) => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const List = counter.count;
    const controlList = counter.controlList
    return (
        <View>
            <Modal transparent={true} visible={true} animationType="slide">
                <View onPress={closeModal} style={Style.modalStyle}>
                    <View style={Style.modal}>
                        <View style={{ flexDirection: "row", margin: 5, justifyContent: "center", alignItems: "center", }}>
                            <UImage onPress={closeButtonPressed} imageSource={Images.closeButton} />
                            <TextInput onChangeText={textInputFunc}
                                value={value} placeholderTextColor={Colors.darkFontColor}
                                placeholder='Ürün giriniz'
                                style={Style.textInputStyle} />
                            <UImage onPress={closeButtonPressed} imageSource={Images.closeButton} />
                        </View>
                        <UButtonWithText text={textFunc} onPress={addButtonPressed} />
                        <ModalHeader headerText={"Listem"} />
                        <FlatList style={Style.flatListStyle}
                            data={List}
                            renderItem={({ item }) => {
                                return (
                                    <FlatListItem text={item.product} onPress={() => {
                                        if (counter.controlList.find(s => s == item.product)) {
                                            const sonuc = controlList.find(e => e == item.product) //product ve number 
                                            const index = controlList.indexOf(sonuc) //index
                                            dispatch(inscreaseNumber(index))
                                        }
                                        else {
                                            dispatch(addControlList(item.product))
                                            dispatch(addNumberList(item.number))
                                        }
                                    }} />
                                );
                            }} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default UModal