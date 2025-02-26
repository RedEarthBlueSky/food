import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../components/Wrapper'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import { parentStyles } from '../styles/styles'

const { h2, h3 } = parentStyles

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [ searchApi, results, errorMessage ] = useResults()
  
  return (
    <Wrapper>
      <View>
        <SearchBar 
          term={term}
          onTermChange={newTerm => setTerm(newTerm)}
          onTermSubmit={() => searchApi(term)}
        />
        <Text style={h2}>Search Results</Text>
        {errorMessage ? <Text style={h3}>{errorMessage}</Text> : null}    
        <Text style={h3}>Term: {term} has returned {results.length} results</Text>
      </View>
    </Wrapper>
  )
}

export default SearchScreen