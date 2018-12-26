import React, { PureComponent } from 'react'
import queryString from 'query-string'

export default class Search extends PureComponent {
  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search)
    if (query) {
      console.log(query)
      // TODO: replace this with api call
    }
  }

  render() {
    return (
      <div>Search</div>
    )
  }
}
