import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import * as Constant from '../utilities/Constant';
import LogoSVG from '../assets/images/Logo.svg';
import SearchSVG from '../assets/images/Search.svg';
import WishlistSVG from '../assets/images/Whishlist.svg';
import CartSVG from '../assets/images/My Bag.svg';
import BookCard from '../components/BookCard';
import BackSVG from '../assets/images/Back.svg';

const SearchResult = () => {
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
        <WishlistSVG width={27} height={27} style={styles.header_icon} />
        <CartSVG width={27} height={27} style={styles.header_icon} />
      </View>
      <View style={styles.home_text_box}>
        <TouchableOpacity>
          <BackSVG width={27} height={27} style={styles.header_icon} />
        </TouchableOpacity>
        <Text style={styles.search_result_text}>Showing result for Design</Text>
      </View>
      <FlatList
        data={items}
        numColumns={2}
        renderItem={({item}) => <BookCard value={item} />}
      />
    </View>
  );
};

export default SearchResult;
