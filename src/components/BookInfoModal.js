import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as Constant from '../utilities/Constant';
import CloseSVG from '../assets/images/Close.svg';

const BookInfoModal = ({modalVisible, handleBackPress, item}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleBackPress}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBackPress}>
          <CloseSVG
            width={27}
            height={27}
            style={{marginLeft: Constant.margin.closeMargin}}
          />
        </TouchableOpacity>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Image
              source={require('../assets/images/book.png')}
              style={styles.image}></Image>
            <View style={styles.name_container}>
              <Text style={styles.book_name}>Book Name</Text>
              <Text style={styles.author_name}>by author name</Text>
            </View>
          </View>
          <Text style={styles.description}>
            Typesetting of the body text is the work of the printer and their
            typesetter. Typesetting of the other parts, the front matter, and
            pages of the body matter involving specific design of their layout
            are, if budget permits, the remit of the book designer. Typesetting
            of the body text is generally considered to be rote work: skilled,
            but not inherently creative. Computer typesetting was thus first
            applied to body text. This represented the bulk of the work, yet
            also that part requiring the least human creative input.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default BookInfoModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    height: Constant.height.modalHeight,
    width: Constant.width.extralarge,
    backgroundColor: Constant.Color.backgroundColor,
    borderRadius: Constant.borderRadius.small,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: Constant.margin.large,
  },
  book_name: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.small,
    color: Constant.Color.black,
    marginLeft: Constant.margin.medium,
  },
  author_name: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.verySmall,
    color: Constant.Color.lightColor,
    marginLeft: Constant.margin.medium,
  },
  image: {
    height: Constant.height.large,
    width: Constant.width.small,
    resizeMode: 'stretch',
  },
  description: {
    fontFamily: 'Lato',
    fontSize: Constant.fontSize.price,
    color: Constant.Color.description_text,
    margin: Constant.margin.medium,
  },
  name_container: {
    marginLeft: Constant.margin.medium,
    marginTop: Constant.margin.large,
  },
});
