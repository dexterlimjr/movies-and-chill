import { fromJS } from 'immutable'
import * as ActionTypes from '../actions/ActionTypes'

const initialState = fromJS({
  searchResults: [],
  popularResults: [],
  trendingResults: [],
  isFetchingSearch: false,
  isFetchingPopular: false,
  isFetchingTrending: false,
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
    case ActionTypes.START_FETCH_POPULAR_MOVIES:
      return state.set('isFetchingPopular', true)
    case ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
      return state
        .set('isFetchingPopular', false)
        .set('popularResults', fromJS(action.data))
    case ActionTypes.FETCH_POPULAR_MOVIES_FAIL:
      return state.set('isFetchingPopular', false)
    case ActionTypes.START_FETCH_TRENDING_MOVIES:
      return state.set('isFetchingTrending', true)
    case ActionTypes.FETCH_TRENDING_MOVIES_SUCCESS:
      return state
        .set('isFetchingTrending', false)
        .set('trendingResults', fromJS(action.data))
    case ActionTypes.FETCH_TRENDING_MOVIES_FAIL:
      return state.set('isFetchingTrending', false)
    default:
      return state
  }
}
