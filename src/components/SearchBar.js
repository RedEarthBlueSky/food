import { View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { searchStyles } from '../styles/styles'
const { backgroundStyle, iconStyle, inputStyle } = searchStyles

const SearchBar = () => {
  return (
    <View style={backgroundStyle}>
      <Feather name='search' style={iconStyle}/>
      <TextInput style={inputStyle} placeholder='Search'/>
    </View>
  )
}

export default SearchBar