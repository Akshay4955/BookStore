import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import BackSVG from '../assets/images/Back.svg';
import SearchSVG from '../assets/images/Type search.svg';
import * as Constant from '../utilities/Constant';
import {NavigationContainer} from '@react-navigation/native';

const Search = ({navigation}) => {
  const styles = GlobalStylesheet();
  const [text, onChangeText] = useState('');
  const handleSubmit = () => {
    navigation.navigate('SearchResult');
  };
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
    </View>
  );
};

export default Search;
