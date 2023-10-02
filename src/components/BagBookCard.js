import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useReducer} from 'react';
import * as Constant from '../utilities/Constant';
import MinusSVG from '../assets/images/Group 4216.svg';
import AddSVG from '../assets/images/Group 4217.svg';
import CloseSVG from '../assets/images/Icon material-close.svg';
import {ListContext} from '../navigation/ListProvider';

const BagBookCard = ({value, calculateTotalPrice}) => {
  const {items, setItems, cartItems} = useContext(ListContext);
  const initialState = cartItems.includes(value.title) ? 1 : 0;
  const reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state === 0 ? 0 : state - 1;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDecrementPress = () => {
    dispatch('decrement');
    const receivedBookData = items;
    const findBook = receivedBookData.find(book => book.title === value.title);
    if (findBook)
      findBook.quantity = findBook.quantity === 0 ? 0 : findBook.quantity - 1;
    setItems(receivedBookData);
  };

  const handleIncrementPress = () => {
    dispatch('increment');
    const receivedBookData = items;
    const findBook = receivedBookData.find(book => book.title === value.title);
    if (findBook) findBook.quantity = findBook.quantity + 1;
    setItems(receivedBookData);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [state]);
  return (
    <View style={styles.container}>
      <Image source={{uri: value.imageUrl}} style={styles.image}></Image>
      <View style={{marginLeft: Constant.margin.large}}>
        <Text style={styles.book_name}>{value.title}</Text>
        <Text style={styles.author_name}>by {value.author}</Text>
        <Text style={styles.price}>Rs {value.price}</Text>
        <View style={styles.button_container}>
          <TouchableOpacity
            onPress={handleDecrementPress}
            style={styles.header_icon}>
            <MinusSVG width={25} height={25} />
          </TouchableOpacity>
          <Text style={styles.count}>{state}</Text>
          <TouchableOpacity
            onPress={handleIncrementPress}
            style={styles.header_icon}>
            <AddSVG width={25} height={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <TouchableOpacity>
          <CloseSVG width={20} height={20} style={styles.header_icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BagBookCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Constant.height.imageContainerHeight,
    width: Constant.width.search,
    margin: Constant.margin.large,
  },
  image: {
    height: Constant.height.imageContainerHeight,
    width: Constant.width.imageWidth,
    resizeMode: 'stretch',
  },
  book_name: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.price,
    color: Constant.Color.black,
    textAlign: 'left',
    marginTop: Constant.margin.verySmall,
  },
  author_name: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.author,
    color: Constant.Color.lightColor,
    textAlign: 'left',
  },
  price: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.price,
    color: Constant.Color.black,
    textAlign: 'left',
    marginTop: Constant.margin.medium,
  },
  button_container: {
    flexDirection: 'row',
    marginTop: Constant.margin.large,
  },
  header_icon: {
    marginLeft: Constant.margin.large,
  },
  count: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.price,
    color: Constant.Color.black,
    marginLeft: Constant.margin.large,
  },

  image_container: {
    width: Constant.width.BookCard,
    height: Constant.height.imageContainerHeight,
    backgroundColor: Constant.Color.image_Backgorund,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
