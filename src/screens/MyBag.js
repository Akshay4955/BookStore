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
  const styles = GlobalStylesheet();
  const [total, setTotal] = useState(0);
  const {items} = useContext(ListContext);

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

  return (
    <View style={styles.screen_container}>
      <View style={styles.screen_container}>
        <View style={styles.home_header}>
          <LogoSVG width={120} height={120} style={styles.header_icon} />
          <SearchSVG
            width={27}
            height={27}
            style={[
              styles.header_icon,
              {marginLeft: Constant.margin.extralarge},
            ]}
          />
          <WishlistSVG width={27} height={27} style={styles.header_icon} />
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
            <BagBookCard value={item} total={total} setTotal={setTotal} />
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
        />
      </View>
    </View>
  );
};

export default MyBag;
