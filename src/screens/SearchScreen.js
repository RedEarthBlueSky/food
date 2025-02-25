import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Wrapper from '../components/Wrapper'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import { parentStyles } from '../styles/styles'
const { h2 } = parentStyles

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  return (
    <Wrapper>
      <View>
        <SearchBar 
          term={term}
          onTermChange={newTerm => setTerm(newTerm)}
          onTermSubmit={() => console.log(`${term} was submitted`)}
        />
        <Text style={h2}>Search Screen</Text>
      </View>
    </Wrapper>
  )
}

export default SearchScreen