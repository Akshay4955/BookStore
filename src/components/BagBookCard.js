import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useReducer} from 'react';
import * as Constant from '../utilities/Constant';
import MinusSVG from '../assets/images/Group 4216.svg';
import AddSVG from '../assets/images/Group 4217.svg';
import CloseSVG from '../assets/images/Icon material-close.svg';

const BagBookCard = value => {
  initialState = 1;
  const reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/book.png')}
        style={styles.image}></Image>
      <View style={{marginLeft: Constant.margin.large}}>
        <Text style={styles.book_name}>{value.value.bookName}</Text>
        <Text style={styles.author_name}>by {value.value.author}</Text>
        <Text style={styles.price}>Rs {value.value.price}</Text>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={() => dispatch('decrement')}>
            <MinusSVG width={25} height={25} />
          </TouchableOpacity>
          <Text style={styles.count}>{state}</Text>
          <TouchableOpacity onPress={() => dispatch('increment')}>
            <AddSVG width={25} height={25} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <CloseSVG width={20} height={20} style={styles.header_icon} />
      </TouchableOpacity>
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header_icon: {
    margin: Constant.margin.small,
    marginLeft: Constant.margin.large,
  },
  count: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.price,
    color: Constant.Color.black,
  },

  image_container: {
    width: Constant.width.BookCard,
    height: Constant.height.imageContainerHeight,
    backgroundColor: Constant.Color.image_Backgorund,
    justifyContent: 'center',
    alignItems: 'center',
  },
});