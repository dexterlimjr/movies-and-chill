import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { fetchMovieDetailsAsync } from '../actions/movie'
import Loader from '../components/Loader'
import MovieDetailsCard from '../components/MovieDetailsCard'
import BackToHome from '../components/BackToHome'
import NotFound from '../components/_404'

class MovieDetailsPage extends PureComponent {
  componentDidMount() {
    const { dispatch, match } = this.props
    const { id } = match.params
    dispatch(fetchMovieDetailsAsync(id))
  }

  render() {
    const { classes, movie, isLoading, error } = this.props

    if (error) return <NotFound />

    return (
      <div className={classes.container}>
        <BackToHome />
        <Loader isLoading={isLoading}>
          <MovieDetailsCard movie={movie} />
        </Loader>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 8,
  },
}

const mapStateToProps = ({ movie }) =>
  ({
    movie: movie.get('result'),
    isLoading: movie.get('isFetching'),
    error: movie.get('error')
  })

export default connect(mapStateToProps)(withStyles(styles)(MovieDetailsPage))
