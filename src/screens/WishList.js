import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import * as Constant from '../utilities/Constant';
import LogoSVG from '../assets/images/Logo.svg';
import SearchSVG from '../assets/images/Search.svg';
import BackSVG from '../assets/images/Back.svg';
import AddedWishlist from '../assets/images/Added to wishlist.svg';
import CartSVG from '../assets/images/My Bag.svg';
import BookCard from '../components/BookCard';
import {ListContext} from '../navigation/ListProvider';

const WishList = ({navigation}) => {
  const styles = GlobalStylesheet();
  const {items} = useContext(ListContext);
  const data = items.filter(book => book.addToWishlist === true);
  const handleBackPress = () => {
    navigation.goBack();
  };
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
        <TouchableOpacity onPress={handleBackPress}>
          <BackSVG width={27} height={27} style={styles.header_icon} />
        </TouchableOpacity>
        <Text style={styles.home_text}>WishList</Text>
        <Text style={styles.items_no}>{data.length} items</Text>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <BookCard value={item} />}
      />
    </View>
  );
};

export default WishList;
