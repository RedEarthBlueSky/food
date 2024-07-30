import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default useResults = () => {
  const [ results, setResults ] = useState([])
  const [ errorMessage, setErrorMessage ] = useState('')

  const searchApi = async (searchTerm) => {
    setResults([]) //  clear results before search
    setErrorMessage('')  // remove error message before search
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'birmingham',
        }
      }) //  response has a data object 
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage(`Error: ${err}`)
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])
  return [searchApi, results, errorMessage]
}