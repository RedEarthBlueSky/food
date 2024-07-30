import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { withNavigation } from 'react-navigation'
import styles from '../styles'
import ResultsDetail from './ResultsDetail'

//  withNavigation now providing navigation object directly
const ResultsList = ({ title, results, navigation }) => {

  return (
    <View style={{}}>
      <View style={styles.searchResultsTitle}>
        <Text style={styles.titleStyle}>{ title }</Text>
        <Text style={styles.searchFieldText}>
          {results.length} results
        </Text>
      </View>

      <View>
        <FlatList 
          data={results}
          horizontal={true}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity 
                onPress={
                  () => {
                    navigation.navigate('ResultsShow', {id: item.id})
                  }}
              >
                <ResultsDetail 
                  result={item}
                />
              </TouchableOpacity>
            )
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default withNavigation(ResultsList)