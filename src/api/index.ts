import axios from 'axios'
import { GRAPHQL_API } from '../constants'

export const instance = axios.create({
  baseURL: `${GRAPHQL_API}`,
})
