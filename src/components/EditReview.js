import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import ComponentsLayout from './ComponentsLayout';

const EditReview = () => {
    const serviceId = useParams();
    const [loadData, setLoadData] = React.useState({});

    const initialValues = {
        text: loadData?.text,
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
        const userEmail = loadData?.userEmail;
        const userImg = loadData?.userImg;
        const userName = loadData?.userName;
        const text = values.text;
        const userComment = { category_id, userEmail, userImg, userName, text };
        console.log(userComment);

        // fetch('http://localhost:8000/users_comment', {
        //     method: 'POST',
        //     headers: {
        //       'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userComment)
        // })
        // .then(res => res.json())
        // .then(data => {
        //   console.log(data);
        //   formReset();
        // })
        // .catch(err => console.error(err))
  };

    React.useEffect( () =>{
        fetch(`http://localhost:8000/comments/${serviceId?.id}`)
        .then( res => res.json())
        .then(data => setLoadData(data));
    }, [])

    // console.log(loadData);

  return (
    <ComponentsLayout>
        <Typography variant="h4" color="error" align="center" gutterBottom>
            Update Review
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
                              Update
                          </Button>
                        </Box>
                    </Form>
                  )}
              </Formik>
          </Box>
    </ComponentsLayout>
  )
}

export default EditReview;
