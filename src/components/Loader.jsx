import React from 'react'
import { CircularProgress } from '@mui/material'
import {Box} from '@mui/material'
const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress/>
    </Box>

  )
}

export default Loader
