import React from 'react'
import { Provider } from 'react-redux'
import Router from './Router'
import store from '../utils/configureStore'

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
)
