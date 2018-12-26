import queryString from 'query-string'
import { API_KEY, BASE_URL } from '../constants'

export const getUrl = (path, _query = {}) => {
  const query = queryString.stringify({ ..._query, api_key: API_KEY })
  return `${BASE_URL}${path}?${query}`
}
