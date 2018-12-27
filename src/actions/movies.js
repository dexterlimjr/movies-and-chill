import * as ActionTypes from './ActionTypes'
import { getApiUrl } from '../utils/api'

const startFetchSearchMovies = () => ({ type: ActionTypes.START_FETCH_SEARCH_MOVIES })
const fetchSearchMoviesSuccess = (data) => ({ type: ActionTypes.FETCH_SEARCH_MOVIES_SUCCESS, data })
const fetchSearchMoviesFail = () => ({ type: ActionTypes.FETCH_SEARCH_MOVIES_FAIL })
const startFetchPopularMovies = () => ({ type: ActionTypes.START_FETCH_POPULAR_MOVIES })
const fetchPopularMoviesSuccess = (data) => ({ type: ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS, data })
const fetchPopularMoviesFail = () => ({ type: ActionTypes.FETCH_POPULAR_MOVIES_FAIL })
const startFetchTrendingMovies = () => ({ type: ActionTypes.START_FETCH_TRENDING_MOVIES })
const fetchTrendingMoviesSuccess = (data) => ({ type: ActionTypes.FETCH_TRENDING_MOVIES_SUCCESS, data })
const fetchTrendingMoviesFail = () => ({ type: ActionTypes.FETCH_TRENDING_MOVIES_FAIL })

export const fetchSearchMoviesAsync = (query) => (dispatch, getState) => {
  dispatch(startFetchSearchMovies())

  fetch(getApiUrl('/search/movie', { query }))
    .then(res => res.json())
    .then(({ results }) => {
      dispatch(fetchSearchMoviesSuccess(results))
    })
    .catch(err => {
      dispatch(fetchSearchMoviesFail())
    })
}

export const fetchPopularMoviesAsync = () => (dispatch, getState) => {
  dispatch(startFetchPopularMovies())

  fetch(getApiUrl('/movie/popular'))
    .then(res => res.json())
    .then(({ results }) => {
      dispatch(fetchPopularMoviesSuccess(results))
    })
    .catch(err => {
      dispatch(fetchPopularMoviesFail())
    })
}

export const fetchTrendingMoviesAsync = () => (dispatch, getState) => {
  dispatch(startFetchTrendingMovies())

  fetch(getApiUrl('/trending/movie/day'))
    .then(res => res.json())
    .then(({ results }) => {
      dispatch(fetchTrendingMoviesSuccess(results))
    })
    .catch(err => {
      dispatch(fetchTrendingMoviesFail())
    })
}
