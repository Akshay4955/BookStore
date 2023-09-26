import {
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import * as Constant from '../utilities/Constant';
import CloseSVG from '../assets/images/Close.svg';

const CustomerDetailsModal = ({
  modalVisible,
  handleBackPress,
  updateCustomerDetails,
}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandmark] = useState('');

  const handleSave = () => {
    updateCustomerDetails({
      name,
      phoneNumber,
      pinCode,
      locality,
      address,
      city,
      landmark,
    });
    handleBackPress();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleBackPress}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBackPress}>
          <CloseSVG
            width={27}
            height={27}
            style={{marginLeft: Constant.margin.closeMargin}}
          />
        </TouchableOpacity>
        <View style={styles.modal}>
          <Text style={styles.book_name}>Customer Details</Text>
          <View style={styles.search_input_container}>
            <TextInput
              value={name}
              placeholder="Name"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setName}
              style={styles.text_input}
            />
          </View>
          <View style={styles.search_input_container}>
            <TextInput
              value={phoneNumber}
              placeholder="Phone Number"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setPhoneNumber}
              style={styles.text_input}
            />
          </View>

          <View style={styles.search_input_container}>
            <TextInput
              value={pinCode}
              placeholder="Pin Code"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setPinCode}
              style={styles.text_input}
            />
          </View>

          <View style={styles.search_input_container}>
            <TextInput
              value={locality}
              placeholder="Locality"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setLocality}
              style={styles.text_input}
            />
          </View>

          <View style={styles.search_input_container}>
            <TextInput
              value={address}
              placeholder="Address"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setAddress}
              style={styles.text_input}
            />
          </View>

          <View style={styles.search_input_container}>
            <TextInput
              value={city}
              placeholder="City"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setCity}
              style={styles.text_input}
            />
          </View>

          <View style={styles.search_input_container}>
            <TextInput
              value={landmark}
              placeholder="Landmark"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setLandmark}
              style={styles.text_input}
            />
          </View>
          <TouchableOpacity onPress={handleSave} style={styles.save_button}>
            <Text style={styles.saveButton_text}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomerDetailsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    height: Constant.height.customerModal,
    width: Constant.width.extralarge,
    backgroundColor: Constant.Color.backgroundColor,
    borderRadius: Constant.borderRadius.small,
  },
  search_input_container: {
    flexDirection: 'row',
    height: Constant.height.medium,
    width: Constant.width.search,
    borderColor: Constant.Color.borderColor,
    borderWidth: Constant.borderWidth.small,
    borderRadius: Constant.borderRadius.small,
    margin: Constant.margin.small,
  },

  book_name: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.search,
    color: Constant.Color.black,
    margin: Constant.margin.medium,
  },
  text_input: {
    color: Constant.Color.black,
  },
  save_button: {
    height: Constant.height.small,
    width: Constant.width.large,
    marginHorizontal: Constant.margin.small,
    backgroundColor: Constant.Color.data_color,
    borderRadius: Constant.borderRadius.small,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  saveButton_text: {
    color: Constant.Color.backgroundColor,
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.price,
  },
});
