import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { withNavigation } from 'react-navigation'
import { ResultDetail } from './ResultDetail'
import { listStyles } from '../styles/styles'
const { container, h2bold, h4, resultsListContainer } = listStyles

const ResultsList = ({title, results, navigation}) => {
  return (
    <View style={resultsListContainer}>
      <Text style={h2bold}>{title} </Text>
      <FlatList 
        data={results}
        horizontal
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
              style={container} 
              onPress={() => {
                navigation.navigate('ResultsShow', {id:  item.id,
                }
              )}}
            >
              <ResultDetail result={ item }/>
            </TouchableOpacity>
          )
        }}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default withNavigation(ResultsList)