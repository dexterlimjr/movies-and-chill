import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from '../containers/SearchPage'
import HomePage from '../containers/HomePage'

const _404 = () => <div>404</div>

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/search" component={SearchPage} />
      <Route component={_404} />
    </Switch>
  </Router>
)
