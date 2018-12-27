import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { fetchPopularMoviesAsync, fetchTrendingMoviesAsync } from '../actions/movies'
import SearchQuery from '../containers/SearchQuery'
import Title from '../components/Title'
import Loader from '../containers/Loader'
import MovieList from '../components/MovieList'

class HomePage extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPopularMoviesAsync())
    dispatch(fetchTrendingMoviesAsync())
  }

  render() {
    const { classes, isLoading, trendingMovies, popularMovies } = this.props
    return (
      <div className={classes.container}>
        <Title value="Trending / Popular movies" />
        <SearchQuery />
        <div className={classes.body}>
          <Loader isLoading={isLoading}>
            <div className={classes.sectionTitle}>
              Trending
            </div>
            <MovieList movies={trendingMovies}/>

            <div className={classes.sectionTitle}>
              Popular
            </div>
            <MovieList movies={popularMovies}/>
          </Loader>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 8,
  },
  body: {
    margin: '40px 0',
  },
  sectionTitle: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 24,
    padding: '20px 0',
    color: 'grey',
  },
}

const mapStateToProps = ({ movies }) =>
  ({
    popularMovies: movies.get('popularResults'),
    trendingMovies: movies.get('trendingResults'),
    isLoading: movies.get('isFetchingPopular') || movies.get('isFetchingTrending'),
  })
export default connect(mapStateToProps)(withStyles(styles)(HomePage))
