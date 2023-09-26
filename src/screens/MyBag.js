import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import * as Constant from '../utilities/Constant';
import LogoSVG from '../assets/images/Logo.svg';
import SearchSVG from '../assets/images/Search.svg';
import WishlistSVG from '../assets/images/Whishlist.svg';
import CartSVG from '../assets/images/My Bag.svg';
import BackSVG from '../assets/images/Back.svg';
import AddSVG from '../assets/images/Add.svg';
import BagBookCard from '../components/BagBookCard';
import CustomerDetailsModal from '../components/CustomerDetailsModal';
import {ListContext} from '../navigation/ListProvider';

const MyBag = ({navigation}) => {
  const {items} = useContext(ListContext);
  const styles = GlobalStylesheet();
  const [total, setTotal] = useState(0);
  const [customerDetails, setCustomerDetails] = useState();

  const data = items.filter(book => book.addToBag === true);

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

  const handleSearchPress = () => {
    navigation.navigate('Search');
  };

  const handleWishListPress = () => {
    navigation.navigate('WishList');
  };
  return (
    <View style={styles.screen_container}>
      <View style={styles.screen_container}>
        <View style={styles.home_header}>
          <LogoSVG width={120} height={120} style={styles.header_icon} />
          <TouchableOpacity onPress={handleSearchPress}>
            <SearchSVG
              width={27}
              height={27}
              style={[
                styles.header_icon,
                {marginLeft: Constant.margin.extralarge},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWishListPress}>
            <WishlistSVG width={27} height={27} style={styles.header_icon} />
          </TouchableOpacity>

          <CartSVG width={27} height={27} style={styles.header_icon} />
        </View>
        <View style={styles.home_text_box}>
          <TouchableOpacity onPress={handleBackPress}>
            <BackSVG width={27} height={27} style={styles.header_icon} />
          </TouchableOpacity>
          <Text style={styles.home_text}>My Bag</Text>
          <Text style={styles.items_no}>{data.length} items</Text>
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
      </View>
      <View>
        <TouchableOpacity
          onPress={handleCustomerPress}
          style={styles.customer_details_box}>
          <Text style={styles.customer_text}>Customer Details</Text>
          <AddSVG width={20} height={20} style={styles.header_icon} />
        </TouchableOpacity>
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
        <View style={styles.customer_details_box}>
          <View>
            <Text style={styles.total_text}>Total</Text>
            <Text style={styles.customer_text}>Rs {total}</Text>
          </View>
          <TouchableOpacity
            style={styles.placeOrder_button}
            onPress={handlePlacerOrder}>
            <Text style={styles.placeOrder_text}>PLACE ORDER</Text>
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
