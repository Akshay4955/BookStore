import {View, Text, FlatList} from 'react-native';
import React, {useContext} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import BookCard from '../components/BookCard';
import {ListContext} from '../navigation/ListProvider';
import Header from '../components/Header';

const Home = ({navigation}) => {
  const styles = GlobalStylesheet();
  const {items} = useContext(ListContext);
  return (
    <View style={styles.screen_container}>
      <Header navigation={navigation} />
      <View style={styles.home_text_box}>
        <Text style={styles.home_text}>Books</Text>
        <Text style={styles.items_no}>{items.length} items</Text>
      </View>
      <FlatList
        data={items}
        numColumns={2}
        renderItem={({item}) => (
          <BookCard value={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Home;
