import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export default ({ isLoading, children }) => (
  isLoading ?
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </div>
  : children
)
