import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import BackSVG from '../assets/images/Back.svg';
import SearchSVG from '../assets/images/Type search.svg';
import * as Constant from '../utilities/Constant';
import {FlatList} from 'react-native-gesture-handler';
import {ListContext} from '../navigation/ListProvider';

const Search = ({navigation}) => {
  const styles = GlobalStylesheet();
  const {recentSearch, setRecentSearch} = useContext(ListContext);
  const [text, onChangeText] = useState('');
  const handleSubmit = () => {
    const data = recentSearch;
    if (data.length < 6) {
      data.splice(data.length, 0, text);
    } else {
      data.splice(0, 1);
      data.push(text);
    }
    setRecentSearch(data);
    navigation.navigate('SearchResult', {text: text});
  };
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleRecentPress = item => {
    navigation.navigate('SearchResult', {text: item});
  };
  return (
    <View style={styles.screen_container}>
      <View style={styles.home_header}>
        <TouchableOpacity onPress={handleBackPress}>
          <BackSVG width={27} height={27} style={styles.header_icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.search_input_container}>
        <SearchSVG
          width={27}
          height={27}
          style={[styles.header_icon, {marginTop: Constant.margin.medium}]}
        />
        <TextInput
          style={styles.text_input}
          value={text}
          placeholder="Search"
          placeholderTextColor={Constant.Color.placeholder}
          onChangeText={onChangeText}
          onSubmitEditing={handleSubmit}></TextInput>
      </View>
      <Text style={styles.search_text}>Recently Searched</Text>
      <FlatList
        data={recentSearch}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleRecentPress(item)}>
            <Text style={styles.recent_search_text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Search;
