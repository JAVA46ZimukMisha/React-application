import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginData from '../../models/LoginData';
import { Alert } from '@mui/material';
import { authService } from '../../config/service-config';
type Props = {
    submitFn: (loginData: LoginData)=>Promise<boolean>
}
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://tel-ran.com">
        Tel-Ran
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginForm({submitFn}: Props) {
    const [flAlert, setAlert] = React.useState<boolean>(false);
    const [isEmail, setEmail] = React.useState<boolean>(false);
    const [isGoogle, setGoogle] = React.useState<boolean>(false);
    const [isFacebook, setFacebook] = React.useState<boolean>(false);
    const [isGitHub, setGitHub] = React.useState<boolean>(false);
    const allFalse = ()=>{
        setEmail(false);
        setGoogle(false);
        setFacebook(false);
        setGitHub(false);
    }
    const setColor = (isIcon: boolean): "inherit" | "action" => {
      return isIcon ? "inherit" : "action"
    }
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {email: data.get('email') as string, password: data.get('password') as string}
    console.log(loginData);
    if(!(await submitFn(loginData))) {
        setAlert(true)
    }
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: {xs: 15, sm: 1, md: 15},
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            {flAlert && <Alert onClose={() => setAlert(false)} severity='error'
             sx={{width: '50vw', mb: {xs: 5,sm:1,md: 5}}}>Wrong Credentials</Alert>}
          <Avatar sx={{  bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Box component="form" onSubmit={handleSubmit} sx={{mt: {xs: 8, sm: 2, md:10}}} >
            <TextField
              
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              
              autoFocus
            />
            <TextField
            sx={{mt: {xs: 5, sm:2, md: 5}}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
             
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: {xs: 5, sm:2, md: 5}}}
            >
              Sign In 
            </Button>
           
          </Box>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <Button onClick={()=> {authService.whichService = "facebook"; allFalse(); setFacebook(true)}}><FacebookIcon color={setColor(isFacebook)}></FacebookIcon></Button>
          <Button onClick={()=> {authService.whichService = "google"; allFalse(); setGoogle(true)}}><GoogleIcon color={setColor(isGoogle)}></GoogleIcon></Button>
          <Button onClick={()=> {authService.whichService = "git"; allFalse(); setGitHub(true)}}><GitHubIcon color={setColor(isGitHub)}></GitHubIcon></Button>
          <Button onClick={()=> {authService.whichService = "email"; allFalse(); setEmail(true)}}><AlternateEmailIcon color={setColor(isEmail)}></AlternateEmailIcon></Button>
        </Box>
        <Copyright sx={{mt: {xs: 5, sm:2, md: 5}  }} />
      </Container>
    </ThemeProvider>
  );
}
