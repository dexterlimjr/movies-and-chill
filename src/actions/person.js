import * as ActionTypes from './ActionTypes'
import { getApiUrl } from '../utils/api'

const startFetchPerson = () => ({ type: ActionTypes.START_FETCH_PERSON })
const fetchPersonSuccess = (data) => ({ type: ActionTypes.FETCH_PERSON_SUCCESS, data })
const fetchPersonFail = () => ({ type: ActionTypes.FETCH_PERSON_FAIL })

export const fetchPersonAsync = (id) => (dispatch, getState) => {
  dispatch(startFetchPerson())

  Promise.all([
    fetch(getApiUrl(`/person/${id}`))
      .then(res => {
        if (res.status !== 200) throw new Error('Something went wrong!')
        return res.json()
      }),
    fetch(getApiUrl(`/person/${id}/movie_credits`))
      .then(res => {
        if (res.status !== 200) throw new Error('Something went wrong!')
        return res.json()
      }),
  ])
  .then(([personRes, creditsRes]) =>
    dispatch(fetchPersonSuccess({ ...personRes, ...creditsRes }))
  ).catch(err => dispatch(fetchPersonFail()))
}
