import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import BackSVG from '../assets/images/Back.svg';
import AddSVG from '../assets/images/Add.svg';
import BagBookCard from '../components/BagBookCard';
import CustomerDetailsModal from '../components/CustomerDetailsModal';
import {ListContext} from '../navigation/ListProvider';
import Header from '../components/Header';
import {useTranslation} from 'react-i18next';

const MyBag = ({navigation}) => {
  const {t} = useTranslation();
  const {items, cartItems} = useContext(ListContext);
  const styles = GlobalStylesheet();
  const [total, setTotal] = useState(0);
  const [customerDetails, setCustomerDetails] = useState();

  const data = items.filter(book => cartItems.includes(book.title));

  const [showModal, setShowModal] = useState(false);
  const handleModalBackPress = () => {
    setShowModal(false);
  };
  const handleCustomerPress = () => {
    setShowModal(true);
  };
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handlePlacerOrder = () => {
    navigation.navigate('Order');
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    data.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    setTotal(totalPrice);
  };

  const updateCustomerDetails = details => {
    setCustomerDetails(details);
  };

  return (
    <View style={styles.screen_container}>
      <View style={styles.bag_container}>
        <Header navigation={navigation} />
        <View style={styles.home_text_box}>
          <TouchableOpacity onPress={handleBackPress}>
            <BackSVG width={27} height={27} style={styles.header_icon} />
          </TouchableOpacity>
          <Text style={styles.home_text}>{t('My bag')}</Text>
          <Text style={styles.items_no}>
            {data.length} {t('Items')}
          </Text>
        </View>
        <FlatList
          data={data}
          numColumns={1}
          renderItem={({item}) => (
            <BagBookCard
              value={item}
              calculateTotalPrice={calculateTotalPrice}
            />
          )}
        />
        <View style={styles.customer_details_add}>
          <TouchableOpacity
            onPress={handleCustomerPress}
            style={styles.customer_details_box}>
            <Text style={styles.customer_text}>{t('Customer Details')}</Text>
            <AddSVG width={20} height={20} style={styles.header_icon} />
          </TouchableOpacity>
        </View>
      </View>
      {customerDetails ? (
        <View style={styles.customer_box}>
          <Text style={styles.info_text}>{customerDetails.name}</Text>
          <Text style={styles.info_text}>{customerDetails.phoneNumber}</Text>
          <Text style={styles.info_text}>
            {customerDetails.address}, {customerDetails.landmark},{' '}
            {customerDetails.locality}, {customerDetails.city},{' '}
            {customerDetails.pinCode},
          </Text>
        </View>
      ) : null}
      <View style={styles.place_order_box}>
        <View style={styles.customer_details_box}>
          <View>
            <Text style={styles.total_text}>{t('Total')}</Text>
            <Text style={styles.customer_text}>Rs {total}</Text>
          </View>
          <TouchableOpacity
            style={styles.placeOrder_button}
            onPress={handlePlacerOrder}>
            <Text style={styles.placeOrder_text}>{t('Place Order')}</Text>
          </TouchableOpacity>
        </View>
        <CustomerDetailsModal
          modalVisible={showModal}
          handleBackPress={handleModalBackPress}
          updateCustomerDetails={updateCustomerDetails}
        />
      </View>
    </View>
  );
};

export default MyBag;
