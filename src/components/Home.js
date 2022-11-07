import { Typography } from '@mui/material';
import React from 'react';
import ComponentsLayout from './ComponentsLayout';

const Home = function () {
    return (
        <ComponentsLayout>
            <Typography variant="h1" color="error" align="center" gutterBottom>
                Home
            </Typography>
        </ComponentsLayout>
    );
};

export default Home;
