import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const Search = (props) => {
  const { classes, onChange, onEnterPress, value } = props

  return (
    <Paper className={classes.container} elevation={1}>
      <InputBase
        className={classes.input}
        placeholder="Search Movie Titles"
        onChange={onChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.target.blur()
            e.preventDefault()

            onEnterPress()
          }
        }}
        value={value}
      />
      <IconButton onClick={onEnterPress} className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

const styles = {
  container: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}

export default withStyles(styles)(Search)
