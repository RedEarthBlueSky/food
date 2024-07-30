import axios from 'axios'
import data from '../data'

const { apiKey, baseURL } = data

export default axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`
  },
})

