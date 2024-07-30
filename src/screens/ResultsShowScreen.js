import { View, Text, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../styles'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [ result, setResult ] = useState(null)
  const id = navigation.getParam('id')

  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) { //  stop screen rendering if state has not updated
    return null
  }

  console.log(result)

  return (
    <View>
      <Text style={styles.H2}>{result.name}</Text>
      <Text style={styles.P}>{result.display_phone}</Text>

      <FlatList 
        data={result.photos}
        keyExtractor={(photos) => photos}
        renderItem={({item}) => {
          return (
            <Image 
              source={{uri: item || null }}
              style={styles.resultsDetailsImage}
            />
          )
        }}
      />
    </View>
  )
}

export default ResultsShowScreen