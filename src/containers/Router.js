import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from '../containers/SearchPage'
import HomePage from '../containers/HomePage'
import MovieDetailsPage from '../containers/MovieDetailsPage'
import PersonPage from '../containers/PersonPage'
import NotFound from '../components/_404'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/movies/:id" component={MovieDetailsPage} />
      <Route exact path="/person/:id" component={PersonPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
