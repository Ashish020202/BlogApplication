import React from 'react'
import {Box, Button, TextField,styled,Typography} from '@mui/material'
// import { display, textAlign } from '@mui/system'
import { useState } from 'react'

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
       &>div, & > button, &>p{
        margin-top:20px;
       }`

   const LoginButton = styled(Button) `
   text-transform: none;
   background: #FB641B;
   color: #fff;
   height: 48px;
   border-radius: 2px:

   `;  

  const SignupButton=styled(Button)`
  Box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
  background:#fff;
  color: #2874f0;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
  `;

  const Text = styled(Typography)`
  color: #878787
  font-size: 16px`;
  
       
 
const Login = () => {

  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

  const [account,toogleAccount] = useState('Login');
  
  const toogleSignup = () => {
    account=== 'signup' ? toogleAccount('Login') :toogleAccount('signup');
  }
  return (
    <Component>
    <Box>
    <Image src={imageURL} alt="login" />
     
     {  
      account ==='Login'?

     <Wrapper>
     <TextField variant='standard' label="Enter username"/>
     <TextField variant='standard' label="Enter Password"/>
     <LoginButton variant='contained'>Login</LoginButton>
     <Text style={{textAlign: 'center',marginTop:'10px'}}>OR</Text>
     <SignupButton onClick={()=>toogleSignup()}>Create an Account</SignupButton>
     </Wrapper>
   :
     <Wrapper>
     <TextField variant='standard' label="Enter Name"/>
     <TextField variant='standard' label="Enter username"/>
     <TextField variant='standard' label="Enter Password"/>
     <SignupButton>Signup</SignupButton>
     <Text style={{textAlign: 'center',marginTop:'10px'}}>OR</Text>
     <LoginButton variant='contained' onClick={()=>toogleSignup()}>Already have an account</LoginButton>
     </Wrapper>
     }
    </Box>
    
     
     </Component>
  )
}

export default Login
