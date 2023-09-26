import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import BackSVG from '../assets/images/Back.svg';
import SearchSVG from '../assets/images/Type search.svg';
import * as Constant from '../utilities/Constant';
import {FlatList} from 'react-native-gesture-handler';

const Search = ({navigation}) => {
  const styles = GlobalStylesheet();
  const [text, onChangeText] = useState('');
  let recentSearch = [];
  const handleSubmit = () => {
    if (recentSearch.length < 6) {
      recentSearch.splice(recentSearch.length, 0, text);
    } else {
      recentSearch.splice(0, 1);
      recentSearch.push(text);
    }
    navigation.navigate('SearchResult', {text: text});
  };
  console.log('Array of recent search', recentSearch);
  const handleBackPress = () => {
    navigation.goBack();
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
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default Search;
