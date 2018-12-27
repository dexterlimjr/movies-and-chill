import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SearchQuery from '../containers/SearchQuery'
import Loader from '../containers/Loader'
import MovieList from '../components/MovieList'
import Title from '../components/Title'

const SearchPage = ({ classes, history, movies, isLoading }) =>
  <div className={classes.container}>
    <Title value="Search" />
    <div className={classes.header}>
      <Link to="/">
        <IconButton className={classes.iconButton} aria-label="ArrowBack">
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <SearchQuery />
    </div>
    <div className={classes.body}>
      <Loader isLoading={isLoading}>
        <MovieList movies={movies}/>
      </Loader>
    </div>
  </div>

const styles = {
  container: {
    padding: 8,
  },
  header: {
    display: 'flex',
  },
  body: {
    margin: '40px 0',
  },
  iconButton: {
    padding: 10,
    marginRight: 8,
  },
}

const mapStateToProps = ({ movies }) =>
  ({ movies: movies.get('searchResults'), isLoading: movies.get('isFetchingSearch') })

export default connect(mapStateToProps)(withStyles(styles)(SearchPage))
