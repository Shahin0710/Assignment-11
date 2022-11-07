import { Typography } from '@mui/material';
import React from 'react';
import ComponentsLayout from './ComponentsLayout';

const Review = function () {
    return (
        <ComponentsLayout>
            <Typography variant="h1" color="error" align="center" gutterBottom>
                Review
            </Typography>
        </ComponentsLayout>
    );
};

export default Review;
