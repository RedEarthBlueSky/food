import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

import styles from '../styles'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchField}>
      <FontAwesome name="search" size={28} color="black" style={styles.searchIcon} />
      <TextInput 
        autoCapitalize='none'
        // autoCorrect='false' ...  cannot use, error...  redundant anyway
        onChangeText={onTermChange} // reference to function, is {newTerm => onTermChange(newTerm)}
        onEndEditing={onTermSubmit} // reference to function, is {() => onTermSubmit()}
        placeholder='Search'
        style={styles.textInputField}
        value={term}
      />
    </View>
  )
}

export default SearchBar