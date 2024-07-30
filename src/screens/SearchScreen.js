import { Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import styles from '../styles'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    //  price ===  '£' || '££' ||  '£££'
    return results.filter(result => { return result.price === price })
  }

  //  JSX Block
  return (
    <>
      <SearchBar 
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => { searchApi(term) }}
      />
      <Text style={styles.searchFieldText}>
        {results.length} results
      </Text>
      { errorMessage 
        ?   <Text style={styles.searchFieldText}> {errorMessage} </Text>
        :   null
      }
      <ScrollView>
        <ResultsList 
          results={filterResultsByPrice('£')} 
          title='Cost Effective' 
        />
        <ResultsList 
          results={filterResultsByPrice('££')} 
          title='Bit Pricier' 
        />
        <ResultsList 
          results={filterResultsByPrice('£££')} 
          title='Big Spender!' 
        />
      </ScrollView>
    </>
  )
}

export default SearchScreen