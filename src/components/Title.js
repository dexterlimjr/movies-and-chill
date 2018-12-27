import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Title = ({ classes, value }) => (
  <div className={classes.container}>
    {value}
  </div>
)

const styles = {
  container: {
    padding: 12,
    fontSize: 32,
    fontWeight: 500,
  },
}

export default withStyles(styles)(Title)
