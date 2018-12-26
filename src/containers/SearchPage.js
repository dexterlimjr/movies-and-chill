import React from 'react'
import { connect } from 'react-redux'
import SearchQuery from '../containers/SearchQuery'

const SearchPage = (props) => {
  console.log(props.movies.toJS())
  return (
    <div>
      <SearchQuery />
      {
        props.movies.map((movie) =>
          <div key={movie.get('id')}>
            <span>title: {movie.get('title')}, </span>
            <span>popularity: {movie.get('popularity')}</span>
          </div>
        )
      }
    </div>
  )
}

const mapStateToProps = ({ movies }) => ({ movies: movies.get('searchResults') })
export default connect(mapStateToProps)(SearchPage)
