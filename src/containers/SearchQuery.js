import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import queryString from 'query-string'
import Search from '../components/Search'
import { fetchSearchMoviesAsync } from '../actions/movies'

class SearchQuery extends PureComponent {
  state = { search: '' }

  componentDidMount() {
    const { location } = this.props
    const { search } = this.state
    const query = this.getQuery(location)
    if (query) {
      this.handleQueryChange(query)
      if (search !== query) {
        this.setState({ search: query })
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props
    const currentQuery = this.getQuery(location)
    const prevQuery = this.getQuery(prevProps.location)
    if (currentQuery !== prevQuery) {
      this.handleQueryChange(currentQuery)
    }
  }

  handleQueryChange(query) {
    const { dispatch } = this.props

    dispatch(fetchSearchMoviesAsync(query))
  }

  getQuery(location) {
    return queryString.parse(location.search).query
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  onEnterPress = () => {
    const { search } = this.state

    const query = queryString.stringify({ query: search })
    this.props.history.push(`/search?${query}`)
  }

  render() {
    const { search } = this.state

    return (
      <Search onChange={this.handleChange} onEnterPress={this.onEnterPress} value={search} />
    )
  }
}

export default connect()(withRouter(SearchQuery))
