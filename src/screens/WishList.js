import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import BackSVG from '../assets/images/Back.svg';
import BookCard from '../components/BookCard';
import {ListContext} from '../navigation/ListProvider';
import Header from '../components/Header';
import {useTranslation} from 'react-i18next';

const WishList = ({navigation}) => {
  const {t} = useTranslation();
  const styles = GlobalStylesheet();
  const {items, wishlistItems} = useContext(ListContext);
  const data = items.filter(book => wishlistItems.includes(book.title));
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.screen_container}>
      <Header navigation={navigation} />
      <View style={styles.wishlist_header}>
        <TouchableOpacity onPress={handleBackPress}>
          <BackSVG width={27} height={27} style={styles.header_icon} />
        </TouchableOpacity>
        <Text style={styles.home_text}>{t('Wishlist')}</Text>
        <Text style={styles.items_no}>
          {data.length} {t('Items')}
        </Text>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => (
          <BookCard value={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default WishList;
