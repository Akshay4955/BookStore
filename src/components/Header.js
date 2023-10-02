import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import * as Constant from '../utilities/Constant';
import LogoSVG from '../assets/images/Logo.svg';
import SearchSVG from '../assets/images/Search.svg';
import WishlistSVG from '../assets/images/Whishlist.svg';
import CartSVG from '../assets/images/My Bag.svg';
import {ListContext} from '../navigation/ListProvider';

const Header = ({navigation}) => {
  const {cartItems} = useContext(ListContext);
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
    <View style={styles.home_header}>
      <LogoSVG width={120} height={120} style={styles.header_icon} />
      <TouchableOpacity onPress={handleSearchPress}>
        <SearchSVG
          width={27}
          height={27}
          style={[styles.header_icon, {marginLeft: Constant.margin.extralarge}]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleWishListPress}>
        <WishlistSVG width={27} height={27} style={styles.header_icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCartPress}>
        <View style={{position: 'relative'}}>
          <CartSVG width={27} height={27} style={styles.header_icon} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartItems.length}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  home_header: {
    flexDirection: 'row',
    height: Constant.height.small,
    width: Constant.width.full,
    marginTop: Constant.margin.large,
    padding: Constant.padding.small,
    alignItems: 'center',
    borderRadius: Constant.borderRadius.small,
  },
  header_icon: {
    marginLeft: Constant.margin.large,
    marginTop: Constant.margin.verySmall,
    color: Constant.Color.data_color,
  },
  badge: {
    position: 'absolute',
    top: 0,
    left: 20,
    height: 16,
    width: 16,
    backgroundColor: 'red',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
});
