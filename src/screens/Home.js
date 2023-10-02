import {View, Text, FlatList} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import BookCard from '../components/BookCard';
import {ListContext} from '../navigation/ListProvider';
import Header from '../components/Header';

const Home = ({navigation}) => {
  const styles = GlobalStylesheet();
  const {items, cartItems, wishlistItems} = useContext(ListContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    navigation.addListener('focus', () => {
      setData(items);
    });
  }, [items, cartItems, wishlistItems]);

  console.log('Data on home screen', data);
  return (
    <View style={styles.screen_container}>
      <Header navigation={navigation} />
      <View style={styles.home_text_box}>
        <Text style={styles.home_text}>Books</Text>
        <Text style={styles.items_no}>{items.length} items</Text>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <BookCard value={item} />}
      />
    </View>
  );
};

export default Home;
