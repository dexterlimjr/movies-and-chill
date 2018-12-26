import * as ActionTypes from './ActionTypes'
import { getUrl } from '../utils/api'

const startFetchSearchMovies = () => ({ type: ActionTypes.START_FETCH_SEARCH_MOVIES })
const fetchSearchMoviesSuccess = (data) => ({ type: ActionTypes.FETCH_SEARCH_MOVIES_SUCCESS, data })
const fetchSearchMoviesFail = () => ({ type: ActionTypes.FETCH_SEARCH_MOVIES_FAIL })

export const fetchSearchMoviesAsync = (query) => (dispatch, getState) => {
  dispatch(startFetchSearchMovies())

  fetch(getUrl('/search/movie', { query }))
    .then(res => res.json())
    .then(({ results }) => {
      dispatch(fetchSearchMoviesSuccess(results))
    })
    .catch(err => {
      dispatch(fetchSearchMoviesFail())
    })
}
