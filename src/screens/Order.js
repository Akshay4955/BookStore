import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import OrderSVG from '../assets/images/Group 4218.svg';
import LogoSVG from '../assets/images/Logo.svg';
import SearchSVG from '../assets/images/Search.svg';
import WishlistSVG from '../assets/images/Whishlist.svg';
import CartSVG from '../assets/images/My Bag.svg';
import EmailSVG from '../assets/images/email.svg';
import ContactSVG from '../assets/images/contact.svg';
import AddressSVG from '../assets/images/Address.svg';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import * as Constant from '../utilities/Constant';

const Order = ({navigation}) => {
  const styles = GlobalStylesheet();
  const handleContinueShopping = () => {
    navigation.navigate('Home');
  };
  const orderNumber = Math.floor(Math.random() * 1000000 + 1);
  return (
    <View style={styles.screen_container}>
      <View style={styles.home_header}>
        <LogoSVG width={120} height={120} style={styles.header_icon} />
        <SearchSVG
          width={27}
          height={27}
          style={[styles.header_icon, {marginLeft: Constant.margin.extralarge}]}
        />
        <WishlistSVG width={27} height={27} style={styles.header_icon} />
        <CartSVG width={27} height={27} style={styles.header_icon} />
      </View>
      <View style={styles.order_container}>
        <OrderSVG width={250} height={250} />
        <Text style={styles.home_text}>Order Placed Successfully</Text>
        <Text style={styles.order_text}>
          hurray!!! your order is confirmed the order id is #{orderNumber} save
          the order id for further communication..
        </Text>
        <TouchableOpacity
          style={styles.continue_button}
          onPress={handleContinueShopping}>
          <Text style={styles.placeOrder_text}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.info_container}>
        <View style={styles.home_header}>
          <EmailSVG width={20} height={20} style={styles.info_icon} />
          <Text style={styles.info_text}>admin@bookstore.com</Text>
          <ContactSVG width={20} height={20} style={styles.info_icon} />
          <Text style={styles.info_text}>+91 8163475881</Text>
        </View>
        <View style={styles.books}>
          <AddressSVG width={20} height={20} style={styles.info_icon} />
          <Text style={styles.address_text}>
            42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
            Kumarakom restaurant, HSR Layout, Bangalore 560034
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Order;
