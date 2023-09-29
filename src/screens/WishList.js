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
  const [bagCount, setBagCount] = useState(0);
  const [count, setCount] = useState(0);
  const data = items.filter(book => book.addToWishlist === true);
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleSearchPress = () => {
    navigation.navigate('Search');
  };

  const handleCartPress = () => {
    navigation.navigate('MyBag');
  };

  const updateBagCount = value => {
    setCount(prevCount => prevCount + value);
  };

  useEffect(() => {
    const receivedBookData = items;
    total = receivedBookData.reduce((sum, book) => sum + book.quantity, 0);
    setBagCount(total);
  }, [count]);
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
        <AddedWishlist width={27} height={27} style={styles.header_icon} />
        <TouchableOpacity onPress={handleCartPress}>
          <View style={{position: 'relative'}}>
            <CartSVG width={27} height={27} style={styles.header_icon} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{bagCount}</Text>
            </View>
          </View>
        </TouchableOpacity>
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
        renderItem={({item}) => (
          <BookCard value={item} updateBagCount={updateBagCount} />
        )}
      />
    </View>
  );
};

export default WishList;
