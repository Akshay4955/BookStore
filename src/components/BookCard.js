import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as Constant from '../utilities/Constant';
import AddWishlist from '../assets/images/Add to whishlist.svg';
import {ownerSVGElement} from 'react-native-svg/lib/typescript/elements/Shape';

const BookCard = value => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          source={require('../assets/images/book.png')}
          style={styles.image}></Image>
      </View>
      <Text style={styles.book_name}>{value.value.bookName}</Text>
      <Text style={styles.author_name}>by {value.value.author}</Text>
      <Text style={styles.price}>Rs {value.value.price}</Text>
      <View style={styles.button_container}>
        <AddWishlist width={27} height={27} style={styles.header_icon} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>ADD TO BAG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    height: Constant.height.BookCard,
    width: Constant.width.BookCard,
    borderWidth: Constant.borderWidth.verySmall,
    borderColor: Constant.Color.borderColor,
    margin: Constant.margin.medium,
  },
  image_container: {
    width: Constant.width.BookCard,
    height: Constant.height.imageContainerHeight,
    backgroundColor: Constant.Color.image_Backgorund,
    justifyContent: 'center',
    alignItems: 'center',
  },
  book_name: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.verySmall,
    color: Constant.Color.black,
    textAlign: 'left',
    marginLeft: Constant.margin.small,
    marginTop: Constant.margin.verySmall,
  },
  author_name: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.author,
    color: Constant.Color.lightColor,
    textAlign: 'left',
    marginLeft: Constant.margin.small,
  },
  price: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.price,
    color: Constant.Color.black,
    textAlign: 'left',
    marginLeft: Constant.margin.small,
  },
  header_icon: {
    margin: Constant.margin.small,
    color: Constant.Color.data_color,
  },
  button_container: {
    flexDirection: 'row',
  },
  button: {
    height: Constant.height.small,
    width: Constant.width.medium,
    backgroundColor: Constant.Color.data_color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Constant.borderRadius.small,
  },
  button_text: {
    color: Constant.Color.backgroundColor,
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.author,
  },
  image: {
    height: Constant.height.imageHeight,
    width: Constant.width.imageWidth,
    resizeMode: 'stretch',
  },
});
