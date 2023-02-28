import React from 'react'
import {Box, Button, TextField} from '@mui/material'
const login = () => {
  return (
    <Box>
     <TextField variant='standard'/>
     <TextField variant='standard'/>
     <Button variant='contained'>Login</Button>
     <Button>Create an Account</Button>
     </Box>
  )
}

export default login
