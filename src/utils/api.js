import queryString from 'query-string'
import { API_KEY, BASE_URL, ASSET_URL } from '../constants'

export const getApiUrl = (path, _query = {}) => {
  const query = queryString.stringify({ ..._query, api_key: API_KEY })
  return `${BASE_URL}${path}?${query}`
}

const getAssetUrl = (size, path) => `${ASSET_URL}/${size}/${path}`

export const getPosterUrl = (path, size = 'w92') => {
  const validSizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']
  if (!~validSizes.indexOf(size)) throw new Error('invalid poster size')

  return getAssetUrl(size, path)
}

export const getProfileUrl = (path, size = 'w45') => {
  const validSizes = ['w45', 'w185', 'h632', 'original']
  if (!~validSizes.indexOf(size)) throw new Error('invalid profile size')

  return getAssetUrl(size, path)
}
