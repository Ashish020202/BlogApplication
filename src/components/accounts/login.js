import React from 'react'
import {Box, Button, TextField,styled,Typography} from '@mui/material'
import { display, textAlign } from '@mui/system'

const Component = styled(Box)`
 width:400px;
 margin:auto;
 box-shadow: 5px 2px 4px 2px rgb(0 0 0/0.6);
 `
//  object
 const Image = styled('img')({
    width: 100,
    margin:'auto',
    display:'flex',
    padding:'50px 0 0'
 });

 const Wrapper = styled(Box)`
       padding: 25px 35px;
       display:flex;
       flex:1;
       flex-direction:column;
       &>div, & > button{
        margin-top:20px
       }`

  const Signup=styled(Button)`
  Box-shadow:5px 4px;
  `
       
 
const login = () => {

  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

  return (
    <Component>
    <Box>
    <Image src={imageURL} alt="login" />
     <Wrapper>
     <TextField variant='standard' label="Enter username"/>
     <TextField variant='standard' label="Enter Password"/>
     <Button variant='contained'>Login</Button>
     <Typography style={{textAlign: 'center'}}>OR</Typography>
     <Button>Create an Account</Button>
     </Wrapper>
  
    </Box>
    
     
     </Component>
  )
}

export default login
