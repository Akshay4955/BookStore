import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import * as Constant from '../utilities/Constant';
import LogoSVG from '../assets/images/Logo.svg';
import SearchSVG from '../assets/images/Search.svg';
import WishlistSVG from '../assets/images/Whishlist.svg';
import CartSVG from '../assets/images/My Bag.svg';
import BookCard from '../components/BookCard';
import BackSVG from '../assets/images/Back.svg';
import BagBookCard from '../components/BagBookCard';

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
  ];

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
  );
};

export default MyBag;