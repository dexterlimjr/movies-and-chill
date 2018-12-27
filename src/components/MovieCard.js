import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { getPosterUrl } from '../utils/api'

const MovieCard = ({ classes, movie }) => (
  <div className={classes.container}>
    <Grid container spacing={24}>
      <Grid item xs={3} sm={4} md={3} lg={2}>
        <div className={classes.imgCard}>
          <img
            className={classes.img}
            alt="movie-img"
            src={getPosterUrl(movie.get('poster_path'), 'w92')}
          />
        </div>
      </Grid>
      <Grid item xs={9} sm={8} md={9} lg={8}>
        <Link to={`/movies/${movie.get('id')}`} style={{ textDecoration: 'none' }}>
          <Paper className={classes.paper}>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <div className={classNames(classes.infoLarge, classes.title)}>{movie.get('title')}</div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.infoLarge}>{movie.get('popularity')}</div>
              </Grid>
              <Grid item xs={12}>
                <h4 className={classes.infoMedium}>{movie.get('overview')}</h4>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      </Grid>
    </Grid>
  </div>
)

const styles = {
  container: {
    padding: '20px 10px',
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
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 2,
    textAlign: 'center',
    color: 'grey',
    background: 'linear-gradient(173deg, #fdfdfd, #fefefe)',
  },
  title: {
    color: '#686768',
  },
  infoLarge: {
    '@media (max-width: 768px)': {
      fontSize: 24,
    },
    '@media (max-width: 320px)': {
      fontSize: 18,
    },
    fontSize: 32,
    fontWeight: 600,
    paddingTop: 20,
  },
  infoMedium: {
    fontSize: 14,
    fontWeight: 400,
    padding: '0px 20px',
    textAlign: 'left',
  }
}

export default withStyles(styles)(MovieCard)
