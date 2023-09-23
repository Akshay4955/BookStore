import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
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

const MyBag = () => {
  const styles = GlobalStylesheet();
  const items = [
    {
      image: '',
      bookName: "Don't Make Me Think",
      author: 'Steve Kurg',
      price: 1500,
    },
    {
      image: '',
      bookName: "Don't Make Me Think",
      author: 'Steve Mark',
      price: 1300,
    },
    {
      image: '',
      bookName: "Don't Make Me Angry",
      author: 'Steve Hunk',
      price: 1200,
    },
    {
      image: '',
      bookName: "Don't Make Me Angry",
      author: 'Steve Hunk',
      price: 1200,
    },
    {
      image: '',
      bookName: "Don't Make Me Angry",
      author: 'Steve Hunk',
      price: 1200,
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const handleBackPress = () => {
    setShowModal(false);
  };
  const handleCustomerPress = () => {
    setShowModal(true);
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
          <TouchableOpacity>
            <BackSVG width={27} height={27} style={styles.header_icon} />
          </TouchableOpacity>
          <Text style={styles.home_text}>My Bag</Text>
          <Text style={styles.items_no}>(12 items)</Text>
        </View>
        <FlatList
          data={items}
          numColumns={1}
          renderItem={({item}) => <BagBookCard value={item} />}
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
            <Text style={styles.customer_text}>Rs 1500</Text>
          </View>
          <TouchableOpacity style={styles.placeOrder_button}>
            <Text style={styles.placeOrder_text}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
        <CustomerDetailsModal
          modalVisible={showModal}
          handleBackPress={handleBackPress}
        />
      </View>
    </View>
  );
};

export default MyBag;
