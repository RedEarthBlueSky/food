import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ResultDetail } from './ResultDetail'
import { listStyles } from '../styles/styles'
const { container, h2bold, h4, resultsListContainer } = listStyles

const ResultsList = ({title, results}) => {
  return (
    <View style={resultsListContainer}>
      <Text style={h2bold}>{title} </Text>
      <FlatList 
        data={results}
        horizontal
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <View style={container}>
              <ResultDetail result={ item }/>
            </View>
          )
        }}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export { ResultsList }