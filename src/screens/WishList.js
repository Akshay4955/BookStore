import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import * as Constant from '../utilities/Constant';
import LogoSVG from '../assets/images/Logo.svg';
import SearchSVG from '../assets/images/Search.svg';
import BackSVG from '../assets/images/Back.svg';
import AddedWishlist from '../assets/images/Added to wishlist.svg';
import CartSVG from '../assets/images/My Bag.svg';
import BookCard from '../components/BookCard';

const WishList = () => {
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

  return (
    <View style={styles.screen_container}>
      <View style={styles.home_header}>
        <LogoSVG width={120} height={120} style={styles.header_icon} />
        <SearchSVG
          width={27}
          height={27}
          style={[styles.header_icon, {marginLeft: Constant.margin.extralarge}]}
        />
        <AddedWishlist width={27} height={27} style={styles.header_icon} />
        <CartSVG width={27} height={27} style={styles.header_icon} />
      </View>
      <View style={styles.wishlist_header}>
        <TouchableOpacity>
          <BackSVG width={27} height={27} style={styles.header_icon} />
        </TouchableOpacity>
        <Text style={styles.home_text}>WishList</Text>
        <Text style={styles.items_no}>(128 items)</Text>
      </View>
      <FlatList
        data={items}
        numColumns={2}
        renderItem={({item}) => <BookCard value={item} />}
      />
    </View>
  );
};

export default WishList;
