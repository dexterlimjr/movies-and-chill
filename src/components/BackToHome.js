import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default () => (
  <Link to="/">
    <IconButton style={{ padding: 10, marginRight: 8 }} aria-label="ArrowBack">
      <ArrowBackIcon />
    </IconButton>
  </Link>
)
