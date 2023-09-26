import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import * as Constant from '../utilities/Constant';
import LogoSVG from '../assets/images/Logo.svg';
import SearchSVG from '../assets/images/Search.svg';
import WishlistSVG from '../assets/images/Whishlist.svg';
import CartSVG from '../assets/images/My Bag.svg';
import BookCard from '../components/BookCard';
import BackSVG from '../assets/images/Back.svg';
import {useRoute} from '@react-navigation/native';
import {ListContext} from '../navigation/ListProvider';

const SearchResult = ({navigation}) => {
  const {items} = useContext(ListContext);
  const route = useRoute();
  const text = route?.params.text;
  const styles = GlobalStylesheet();

  const data = items.filter(
    book =>
      book.title.includes(text) ||
      book.author.includes(text) ||
      book.description.includes(text),
  );
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleWishListPress = () => {
    navigation.navigate('WishList');
  };

  const handleCartPress = () => {
    navigation.navigate('MyBag');
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
        <TouchableOpacity onPress={handleWishListPress}>
          <WishlistSVG width={27} height={27} style={styles.header_icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCartPress}>
          <CartSVG width={27} height={27} style={styles.header_icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.home_text_box}>
        <TouchableOpacity onPress={handleBackPress}>
          <BackSVG width={27} height={27} style={styles.header_icon} />
        </TouchableOpacity>
        <Text style={styles.search_result_text}>Showing result for {text}</Text>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <BookCard value={item} />}
      />
    </View>
  );
};

export default SearchResult;
