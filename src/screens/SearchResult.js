import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import BookCard from '../components/BookCard';
import BackSVG from '../assets/images/Back.svg';
import {useRoute} from '@react-navigation/native';
import {ListContext} from '../navigation/ListProvider';
import Header from '../components/Header';

const SearchResult = ({navigation}) => {
  const {items} = useContext(ListContext);
  const route = useRoute();
  const text = route?.params.text;
  const styles = GlobalStylesheet();

  const data = items.filter(
    book =>
      book.title.includes(text) ||
      book.author.includes(text) ||
      book.description.includes(text),
  );
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.screen_container}>
      <Header navigation={navigation} />
      <View style={styles.home_text_box}>
        <TouchableOpacity onPress={handleBackPress}>
          <BackSVG width={27} height={27} style={styles.header_icon} />
        </TouchableOpacity>
        <Text style={styles.search_result_text}>Showing result for {text}</Text>
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

export default SearchResult;
