import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import ComponentsLayout from './ComponentsLayout';

const theme = createTheme();

const PageSignup = () => {
    const navigate = useNavigate();
    const { createUser, signInWithGoogle, updateUserProfile } = React.useContext(AuthContext);

    const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            // handleEmailVerification();
            navigate('/');
        })
        .catch(error => {
            console.error(error)
        })
  };

    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
          displayName: name,
          photoURL: photoURL
      }
      updateUserProfile(profile)
          .then(() => { })
          .catch(error => console.error(error));
  }

   const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then( result => {
          const user = result.user;
          console.log(user);
      })
      .catch(error => console.error(error));
  }

  return (
    <ComponentsLayout>
    <Box sx={{ my: 5 }}>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010_960_720.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
               <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                 <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                 Sign up
               </Typography>
               <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                 <Grid container spacing={2}>
                   <Grid item xs={12} sm={12}>
                     <TextField
                       autoComplete="user-name"
                       name="name"
                       required
                       fullWidth
                       id="name"
                       label="User Name"
                       autoFocus
                     />
                   </Grid>
                   <Grid item xs={12} sm={12}>
                     <TextField
                       required
                       fullWidth
                       id="photoURL"
                       label="User Photo url"
                       name="photoURL"
                       autoComplete="photo-url"
                     />
                   </Grid>
                   <Grid item xs={12}>
                     <TextField
                       required
                       fullWidth
                       id="email"
                       label="Email Address"
                       name="email"
                       autoComplete="email"
                     />
                   </Grid>
                   <Grid item xs={12}>
                     <TextField
                       required
                       fullWidth
                       name="password"
                       label="Password"
                       type="password"
                       id="password"
                       autoComplete="new-password"
                     />
                   </Grid>
                   <Grid item xs={12}>
                     <FormControlLabel
                       control={<Checkbox value="allowExtraEmails" color="primary" />}
                       label="I want to receive inspiration, marketing promotions and updates via email."
                     />
                   </Grid>
                 </Grid>
                 <Button
                   type="submit"
                   fullWidth
                   variant="contained"
                   sx={{ mt: 3, mb: 2 }}
                 >
                   Sign Up
                 </Button>
                 <Grid container justifyContent="flex-end">
                   <Grid item>
                     <Link href="/login" variant="body2">
                       Already have an account? Sign in
                     </Link>
                   </Grid>
                 </Grid>
                 <Grid container sx={{ mt: 3 }}>
                   <Grid item xs>
                     <Button onClick={handleGoogleSignIn} size="small" startIcon={<GoogleIcon />}>Sign Up With Google</Button>
                   </Grid>
                   <Grid item>
                     {''}
                   </Grid>
                 </Grid>
               </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </Box>
    </ComponentsLayout>
  )
}

export default PageSignup;
