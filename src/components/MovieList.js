import React, { PureComponent } from 'react'
import MovieCard from './MovieCard'

export default class MovieList extends PureComponent {
  render() {
    const { movies } = this.props
    console.log(movies.toJS())
    return movies.map((movie) =>
      <MovieCard key={movie.get('id')} movie={movie} />
    )
  }
}
