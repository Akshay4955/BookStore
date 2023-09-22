import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';


const Search = () => {
  const styles = GlobalStylesheet();
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.screen_container}>
      <View style={styles.home_header}>
        <TextInput
          style={{color: 'black'}}
          value={text}
          placeholder="Search"
          onChangeText={onChangeText}></TextInput>
      </View>
    </View>
  );
};

export default Search;
