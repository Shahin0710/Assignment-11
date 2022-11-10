import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../contexts/UserContext';
import ComponentsLayout from './ComponentsLayout';
import PageTitle from './PageTitel';

const AddReview = () => {
    PageTitle('Add Review');
    const {user} = React.useContext(AuthContext);
    const serviceId = useParams();
    const [loadData, setLoadData] = React.useState({});

    const initialValues = {
        text: '',
    };

    const validationSchema = Yup.object().shape({
        text: Yup.string()
            .min(10, 'Minimum characters should be 10')
            .max(100, 'Maximum characters should be 100')
            .required('Text is required'),
    });

    const handleSubmit = (values, props) => {
        const formReset = () => {
            props.resetForm();
        };
        const category_id = loadData?.category_id;
        const userEmail = user?.email;
        const userImg = user?.photoURL;
        const userName = user?.displayName;
        const text = values.text;
        const userComment = { category_id, userEmail, userImg, userName, text };
        // console.log(userComment);

        fetch('https://service-review-server-side-weld.vercel.app/users_comment', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(userComment)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          formReset();
          // const newUsers = [...users, data];
          // setUsers(newUsers);
        })
        .catch(err => console.error(err))
  };

    React.useEffect( () =>{
        fetch(`https://service-review-server-side-weld.vercel.app/service/${serviceId?.id}`)
        .then( res => res.json())
        .then(data => setLoadData(data));
    }, [])

  return (
    <ComponentsLayout>
        <Typography variant="h4" color="error" align="center" gutterBottom>
            Add Review
        </Typography>
          <Box sx={{ my: 8, mx: 4 }}>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  {(formik) => (
                    <Form noValidate>
                        <Box>
                          <Grid item xs={12}>
                            <Field
                              as={TextField}
                              multiline
                              minRows={3}
                              name="text"
                              required
                              fullWidth
                              label="Type Text"
                              error={formik.errors.text && formik.touched.text}
                              helperText={<ErrorMessage name="text" />}
                            />
                          </Grid>
                          <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}
                          >
                              Add
                          </Button>
                        </Box>
                    </Form>
                  )}
              </Formik>
          </Box>
    </ComponentsLayout>
  )
}

export default AddReview;