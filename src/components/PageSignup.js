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
import Snackbar from '@mui/material/Snackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../contexts/UserContext';
import AlertMessage from './AlertMessage';
import ComponentsLayout from './ComponentsLayout';

const theme = createTheme();

const PageSignup = () => {
    const navigate = useNavigate();
    const { createUser, signInWithGoogle, updateUserProfile } = React.useContext(AuthContext);

    const [massage, setMassage] = React.useState('');
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbarOpen(false);
    };

       const initialValues = {
        name: '',
        photoURL: '',
        email: '',
        password: '',
        re_password: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Minimum characters should be 3')
            .max(30, 'Maximum characters should be 30')
            .required('Name is required'),
        photoURL: Yup.string()
            .min(3, 'Minimum characters should be 3')
            .max(500, 'Maximum characters should be 500')
            .required('Name is required'),
        email: Yup.string().email('Enter valid email').required('Email is required'),
        password: Yup.string()
            .min(6, 'Minimum characters should be 6')
            .max(10, 'Maximum characters should be 10')
            .required('Password is required'),
        re_password: Yup.string()
            .oneOf([Yup.ref('password')], 'Password does not matches')
            .required('Re_type password is required'),
    });

    const handleSubmit = (values, props) => {
        const formReset = () => {
            props.resetForm();
        };
    const name = values.name;
    const photoURL = values.photoURL;
    const email = values.email;
    const password = values.password;
    
    createUser(email, password)
        .then(result => {
            formReset();
            handleUpdateUserProfile(name, photoURL);
            navigate('/');
        })
        .catch(error => {
            setMassage(error.message);
            setSnackbarOpen(true);
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
      <Grid container sx={{ height: '100vh' }}>
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
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  {(formik) => (
                    <Form noValidate>
                      <Box>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <Field
                            as={TextField}
                            name="name"
                            required
                            fullWidth
                            label="User Name"
                            error={formik.errors.name && formik.touched.name}
                            helperText={<ErrorMessage name="name" />}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <Field
                            as={TextField}
                            name="photoURL"
                            required
                            fullWidth
                            label="User Photo url"
                            error={formik.errors.photoURL && formik.touched.photoURL}
                            helperText={<ErrorMessage name="photoURL" />}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="email"
                            required
                            fullWidth
                            label="Email Address"
                            error={formik.errors.email && formik.touched.email}
                            helperText={<ErrorMessage name="email" />}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="password"
                            required
                            fullWidth
                            label="Password"
                            error={formik.errors.password && formik.touched.password}
                            helperText={<ErrorMessage name="password" />}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="re_password"
                            required
                            fullWidth
                            label="Re-password"
                            error={formik.errors.re_password && formik.touched.re_password}
                            helperText={<ErrorMessage name="re_password" />}
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
                  </Form>
                  )}
                </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={massage}
        action={<AlertMessage handleClose={handleClose} />}
      />
    </ComponentsLayout>
  )
}

export default PageSignup;
