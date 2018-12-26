import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import SearchQuery from '../containers/SearchQuery'
import MovieList from '../components/MovieList'

const SearchPage = ({ movies, isLoading }) =>
  <div>
    <SearchQuery />
    <div style={{ margin: '40px 0' }}>
      { isLoading ?
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </div>
        : <MovieList movies={movies}/>
      }
    </div>
  </div>

const mapStateToProps = ({ movies }) =>
  ({ movies: movies.get('searchResults'), isLoading: movies.get('isFetchingSearch') })
export default connect(mapStateToProps)(SearchPage)
