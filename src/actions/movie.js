import * as ActionTypes from './ActionTypes'
import { getApiUrl } from '../utils/api'

const startFetchMovieDetails = () => ({ type: ActionTypes.START_FETCH_MOVIE_DETAILS })
const fetchMovieDetailsSuccess = (data) => ({ type: ActionTypes.FETCH_MOVIE_DETAILS_SUCCESS, data })
const fetchMovieDetailsFail = () => ({ type: ActionTypes.FETCH_MOVIE_DETAILS_FAIL })

export const fetchMovieDetailsAsync = (id) => (dispatch, getState) => {
  dispatch(startFetchMovieDetails())

  Promise.all([
    fetch(getApiUrl(`/movie/${id}`))
      .then(res => {
        if (res.status !== 200) throw new Error('Something went wrong!')
        return res.json()
      }),
    fetch(getApiUrl(`/movie/${id}/credits`))
      .then(res => {
        if (res.status !== 200) throw new Error('Something went wrong!')
        return res.json()
      }),
  ])
  .then(([movieRes, creditsRes]) =>
    dispatch(fetchMovieDetailsSuccess({ ...movieRes, ...creditsRes }))
  ).catch(err => dispatch(fetchMovieDetailsFail()))
}
