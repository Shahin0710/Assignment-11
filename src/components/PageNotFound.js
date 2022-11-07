import { Stack, Typography } from '@mui/material';
import React from 'react';
import ComponentsLayout from './ComponentsLayout';

const PageNotFound = function () {
    return (
        <ComponentsLayout>
            <Stack justifyContent="center" sx={{ minHeight: '80vh' }}>
                <Typography variant="h1" color="error" align="center" gutterBottom>
                    Sorry, Page Not Found !
                </Typography>
            </Stack>
        </ComponentsLayout>
    );
};

export default PageNotFound;