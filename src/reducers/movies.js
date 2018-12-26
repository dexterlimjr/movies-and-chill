import { fromJS } from 'immutable'
import * as ActionTypes from '../actions/ActionTypes'

const initialState = fromJS({
  searchResults: [],
  popularResults: [],
  isFetchingSearch: false,
  isFetchingPopular: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_FETCH_SEARCH_MOVIES:
      return state.set('isFetchingSearch', true)
    case ActionTypes.FETCH_SEARCH_MOVIES_SUCCESS:
      return state
        .set('isFetchingSearch', false)
        .set('searchResults', fromJS(action.data))
    case ActionTypes.FETCH_SEARCH_MOVIES_FAIL:
      return state.set('isFetchingSearch', false)
    default:
      return state
  }
}
