import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SearchQuery from '../containers/SearchQuery'
import Title from '../components/Title'

const HomePage = ({ classes }) => (
  <div className={classes.container}>
    <Title value="Trending/Popular movies" />
    <SearchQuery />
  </div>
)

const styles = {
  container: {
    padding: 8,
  },
}

export default withStyles(styles)(HomePage)
