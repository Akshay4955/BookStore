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

const CustomerDetailsModal = ({modalVisible, handleBackPress}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandmark] = useState('');
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
            />
          </View>
          <View style={styles.search_input_container}>
            <TextInput
              value={phoneNumber}
              placeholder="Phone Number"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setPhoneNumber}
            />
          </View>

          <View style={styles.search_input_container}>
            <TextInput
              value={pinCode}
              placeholder="Pin Code"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setPinCode}
            />
          </View>

          <View style={styles.search_input_container}>
            <TextInput
              value={locality}
              placeholder="Locality"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setLocality}
            />
          </View>

          <View style={styles.search_input_container}>
            <TextInput
              value={address}
              placeholder="Address"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setAddress}
            />
          </View>

          <View style={styles.search_input_container}>
            <TextInput
              value={city}
              placeholder="City"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setCity}
            />
          </View>

          <View style={styles.search_input_container}>
            <TextInput
              value={landmark}
              placeholder="Landmark"
              placeholderTextColor={Constant.Color.placeholder}
              onChangeText={setLandmark}
            />
          </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: Constant.margin.large,
  },
  book_name: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.search,
    color: Constant.Color.black,
    margin: Constant.margin.medium,
  },
  author_name: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.verySmall,
    color: Constant.Color.lightColor,
    marginLeft: Constant.margin.medium,
  },
  image: {
    height: Constant.height.large,
    width: Constant.width.small,
    resizeMode: 'stretch',
  },
  description: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.price,
    color: Constant.Color.description_text,
    margin: Constant.margin.medium,
  },
  name_container: {
    marginLeft: Constant.margin.medium,
    marginTop: Constant.margin.large,
  },
});
