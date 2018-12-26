import queryString from 'query-string'
import { API_KEY, BASE_URL } from '../constants'

export const getApiUrl = (path, _query = {}) => {
  const query = queryString.stringify({ ..._query, api_key: API_KEY })
  return `${BASE_URL}${path}?${query}`
}

export const getPosterUrl = (path, size = 'w92') => {
  const validSizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']
  if (!~validSizes.indexOf(size)) throw new Error('invalid poster size')

  return `http://image.tmdb.org/t/p/${size}${path}`
}
