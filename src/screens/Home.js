import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import * as Constant from '../utilities/Constant';
import LogoSVG from '../assets/images/Logo.svg';
import SearchSVG from '../assets/images/Search.svg';
import WishlistSVG from '../assets/images/Whishlist.svg';
import CartSVG from '../assets/images/My Bag.svg';
import BookCard from '../components/BookCard';
import {ListContext} from '../navigation/ListProvider';

const Home = ({navigation}) => {
  const {items} = useContext(ListContext);
  const styles = GlobalStylesheet();

  const handleSearchPress = () => {
    navigation.navigate('Search');
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
        <TouchableOpacity onPress={handleCartPress}>
          <CartSVG width={27} height={27} style={styles.header_icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.home_text_box}>
        <Text style={styles.home_text}>Books</Text>
        <Text style={styles.items_no}>{items.length} items</Text>
      </View>
      <FlatList
        data={items}
        numColumns={2}
        renderItem={({item}) => <BookCard value={item} />}
      />
    </View>
  );
};

export default Home;
