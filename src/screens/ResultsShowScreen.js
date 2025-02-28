import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { listStyles } from '../styles/styles'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')
  
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  console.log(result)

  return (
    <View>
      <Text style={listStyles.h2bold}>Results Show Screen</Text>
    </View>
  )
}

export default ResultsShowScreen