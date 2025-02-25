import axios from "axios"
import { APIKeys } from "../env/apikeys"


//  create axios instance
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${APIKeys.MY_API_KEY}`
  },
})






