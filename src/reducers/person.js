import { fromJS } from 'immutable'
import * as ActionTypes from '../actions/ActionTypes'

const initialState = fromJS({
  result: {},
  isFetching: false,
  error: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_FETCH_PERSON:
      return state
        .set('isFetching', true)
        .set('error', false)
    case ActionTypes.FETCH_PERSON_SUCCESS:
      return state
        .set('isFetching', false)
        .set('result', fromJS(action.data))
    case ActionTypes.FETCH_PERSON_FAIL:
      return state
        .set('isFetching', false)
        .set('error', true)
    default:
      return state
  }
}
