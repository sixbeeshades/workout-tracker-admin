import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const BackDrop = (props:any) => {
  return (
    <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={props.open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  )
}

export default BackDrop