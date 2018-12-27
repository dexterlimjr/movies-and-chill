import { combineReducers } from 'redux'

import movies from './movies'
import movie from './movie'
import person from './person'

export default combineReducers({
  movies,
  movie,
  person,
})
