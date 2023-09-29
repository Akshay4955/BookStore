import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import * as Constant from '../utilities/Constant';
import AddWishlist from '../assets/images/Add to whishlist.svg';
import AddedWishlist from '../assets/images/Added to wishlist.svg';
import BookInfoModal from '../components/BookInfoModal';
import {ListContext} from '../navigation/ListProvider';

const BookCard = value => {
  const {items, setItems} = useContext(ListContext);
  const [addToBag, setAddToBag] = useState(value.value.addToBag);
  const [addtoWishList, setAddToWishList] = useState(value.value.addToWishlist);
  const [showModal, setShowModal] = useState(false);

  const handleItemPress = () => {
    setShowModal(true);
  };
  const handleBackPress = () => {
    setShowModal(false);
  };

  const handleAddWishListPress = () => {
    setAddToWishList(!addtoWishList);
    const receivedBookData = items;
    const findBook = receivedBookData.find(
      book => book.title === value.value.title,
    );
    if (findBook) findBook.addToWishlist = !addtoWishList;
    setItems(receivedBookData);
  };

  const handleAddToBagPress = () => {
    setAddToBag(!addToBag);
    value.updateBagCount(!addToBag ? 1 : -1);
    const receivedBookData = items;
    const findBook = receivedBookData.find(
      book => book.title === value.value.title,
    );
    if (findBook) {
      findBook.addToBag = !addToBag;
      findBook.quantity = !addToBag
        ? findBook.quantity + 1
        : findBook.quantity - 1;
    }
    setItems(receivedBookData);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleItemPress}>
        <View style={styles.image_container}>
          <Image
            source={{uri: value.value.imageUrl}}
            style={styles.image}></Image>
        </View>
        <Text style={styles.book_name}>{value.value.title}</Text>
        <Text style={styles.author_name}>by {value.value.author}</Text>
        <Text style={styles.price}>Rs {value.value.price}</Text>
      </TouchableOpacity>
      {addToBag ? (
        <TouchableOpacity
          style={styles.addedToBag_button}
          onPress={handleAddToBagPress}>
          <Text style={styles.addedToBag_text}>ADDED TO BAG</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.button_container}>
          {addtoWishList ? (
            <TouchableOpacity onPress={handleAddWishListPress}>
              <AddedWishlist
                width={27}
                height={27}
                style={styles.header_icon}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleAddWishListPress}>
              <AddWishlist width={27} height={27} style={styles.header_icon} />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.button} onPress={handleAddToBagPress}>
            <Text style={styles.button_text}>ADD TO BAG</Text>
          </TouchableOpacity>
        </View>
      )}
      <BookInfoModal
        modalVisible={showModal}
        handleBackPress={handleBackPress}
        item={value}
      />
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
    fontSize: Constant.fontSize.verySmall,
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
  addedToBag_button: {
    height: Constant.height.small,
    width: Constant.width.large,
    marginHorizontal: Constant.margin.small,
    backgroundColor: Constant.Color.addedToBagColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Constant.borderRadius.small,
    borderWidth: Constant.borderWidth.verySmall,
    borderColor: Constant.Color.data_color,
  },
  button_text: {
    color: Constant.Color.backgroundColor,
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.author,
  },
  addedToBag_text: {
    color: Constant.Color.data_color,
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.author,
  },
  image: {
    height: Constant.height.imageHeight,
    width: Constant.width.imageWidth,
    resizeMode: 'stretch',
  },
});
