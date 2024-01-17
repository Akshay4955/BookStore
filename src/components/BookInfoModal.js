import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import * as Constant from '../utilities/Constant';
import CloseSVG from '../assets/images/Close.svg';
import {useTranslation} from 'react-i18next';

const BookInfoModal = ({modalVisible, handleBackPress, item}) => {
  const {t, i18n} = useTranslation();
  const handleLanguageChange = language => {
    i18n.changeLanguage(language);
  };
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
            <Image source={{uri: item.imageUrl}} style={styles.image}></Image>
            <View style={styles.name_container}>
              <Text style={styles.book_name}>{item.title}</Text>
              <Text style={styles.author_name}>by {item.author}</Text>
            </View>
          </View>
          <Text style={styles.description}>{item.description}</Text>
          <Button
            onPress={() => handleLanguageChange('Hindi')}
            title="भाषा को हिंदी में बदलें"
            color="#841584"
          />
          <Button
            onPress={() => handleLanguageChange('English')}
            title="Change Language to English"
            color="#841372"
          />
          <Button
            onPress={() => handleLanguageChange('Marathi')}
            title="भाषा बदलून मराठी करा"
            color="#841835"
          />
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
