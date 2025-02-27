import { ScrollView, View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Wrapper, SearchBar, ResultsList } from '../components'
import { resultsByPrice } from '../helpers'
import useResults from '../hooks/useResults'
import { parentStyles } from '../styles/styles'
const { h2, h3, h5 } = parentStyles

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [ searchApi, results, errorMessage ] = useResults()

  //  ******  TODO - Breadcrumb with search location, number of results, area of search
  //  useEffect to populate the list with some data on page load
  useEffect(() => {
    searchApi('Indian')
  }, [])

  return (
    <Wrapper>
      <>
        <SearchBar 
          term={term}
          onTermChange={newTerm => setTerm(newTerm)}
          onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text style={h3}>{errorMessage}</Text> : null}    
        <Text style={h5}>{term} {results.length} results</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ResultsList results={resultsByPrice('£', results)} title='Cost Effective'/>
            <ResultsList results={resultsByPrice('££', results)} title='Nicey Pricey'/>
            <ResultsList results={resultsByPrice('£££', results)} title='Pretty Pricey'/>
            <ResultsList results={resultsByPrice('££££', results)} title='Big Spender'/>
          </ScrollView>
      </>
    </Wrapper>
  )
}

export default SearchScreen