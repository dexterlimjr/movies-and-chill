import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { getProfileUrl } from '../utils/api'

const PersonCard = ({ classes, person }) => {
  if (!person.size) return null

  const sortedCast = person.get('cast').sort((a, b) => {
    if (a.get('popularity') > b.get('popularity')) { return -1 }
    if (a.get('popularity') < b.get('popularity')) { return 1 }
    return 0
  })

  return (
    <div className={classes.container}>
      <div className={classes.name}>{person.get('name')}</div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className={classes.imgCard}>
            <img
              className={classes.img}
              alt="movie-img"
              src={getProfileUrl(person.get('profile_path'), 'w185')}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <div className={classes.subHeading}>Place of Birth</div>
          <div className={classes.subtext}>
            {person.get('place_of_birth')}
          </div>

          <div className={classes.subHeading}>Biography</div>
          <div className={classes.subtext}>
            {person.get('biography')}
          </div>

          <div className={classes.subHeading}>Birthday</div>
          <div className={classes.subtext}>
            {person.get('birthday')}
          </div>

          <div className={classes.subHeading}>Also Known As</div>
          <div className={classes.subtext}>
            {person.get('also_known_as').join(', ') }
          </div>

          <div className={classes.subHeading}>Also acted in</div>
          <div className={classes.subtext}>
            {
              sortedCast.map(c =>
                <Link key={`cast-${c.get('credit_id')}`} to={`/movies/${c.get('id')}`}>
                  <span className={classes.cast}>
                    {c.get('original_title')}
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
  name: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    paddingBottom: 20,
    fontSize: 24,
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

export default withStyles(styles)(PersonCard)
