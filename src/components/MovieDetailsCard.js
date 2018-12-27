import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { getPosterUrl } from '../utils/api'

const MovieDetailsCard = ({ classes, movie }) => {
  if (!movie.size) return null

  const sortedCast = movie.get('cast').sort((a, b) => {
    if (a.get('cast_id') < b.get('cast_id')) { return -1 }
    if (a.get('cast_id') > b.get('cast_id')) { return 1 }
    return 0
  })

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.title}>{movie.get('title')}</div>
        <div className={classes.year}>{movie.get('release_date').slice(0, 4)}</div>
      </div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className={classes.imgCard}>
            <img
              className={classes.img}
              alt="movie-img"
              src={getPosterUrl(movie.get('poster_path'), 'w342')}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <div className={classes.subHeading}>Overview</div>
          <div className={classes.subtext}>
            {movie.get('overview')}
          </div>

          <div className={classes.subHeading}>Runtime</div>
          <div className={classes.subtext}>
            {movie.get('runtime')} mins
          </div>

          <div className={classes.subHeading}>Genres</div>
          <div className={classes.subtext}>
            {movie.get('genres').map(g => g.get('name')).join(', ') }
          </div>

          <div className={classes.subHeading}>Popularity</div>
          <div className={classes.subtext}>
            {movie.get('popularity')}
          </div>

          <div className={classes.subHeading}>Casts</div>
          <div className={classes.subtext}>
            {
              sortedCast.map(c =>
                <Link key={`cast-${c.get('id')}`} to={`/casts/${c.get('id')}`}>
                  <span className={classes.cast}>
                    {c.get('name')}
                  </span>
                </Link>
              )
            }
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

const styles = {
  container: {
    padding: 10,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
  },
  year: {
    fontSize: 20,
    color: 'grey',
    paddingLeft: 6,
  },
  imgCard: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 'fit-content',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 500,
    color: '#0d0d0d',
    padding: '20px 0',
  },
  subtext: {
    fontSize: 16,
    color: '#5e5e5e',
  },
  cast: {
    paddingRight: 10,
  },
}

export default withStyles(styles)(MovieDetailsCard)
