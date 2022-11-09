import { Typography } from '@mui/material';
import React from 'react';
import ComponentsLayout from './ComponentsLayout';

const AddReview = () => {
  return (
    <ComponentsLayout>
        <Typography variant="h1" color="error" align="center" gutterBottom>
            Add Review
        </Typography>
    </ComponentsLayout>
  )
}

export default AddReview;