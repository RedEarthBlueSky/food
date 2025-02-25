import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import { parentStyles } from '../styles/styles'
const { h1, h2, h3 } = parentStyles

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text style={h2}>Search Screen</Text>
    </View>
  )
}

export default SearchScreen