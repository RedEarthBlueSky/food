import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from '../styles'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.resultsContainer}>
      <Image 
        //  the || null fixed a RN bug
        source={{ uri: result.image_url || null }}
        style={styles.searchResultsImage}
      />
      <View style={{padding: 5, borderRadius: 10}}>
        <Text style={styles.resultName}>{result.name}</Text>
        <Text>{result.rating} stars, {result.review_count} Reviews</Text>
      </View>
    </View>
  )
}

export default ResultsDetail