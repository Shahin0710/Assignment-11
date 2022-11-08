import { Stack, Typography } from '@mui/material';
import React from 'react';

const PageNotFound = function () {
    return (
        <>
            <Stack justifyContent="center" sx={{ minHeight: '80vh' }}>
                <Typography variant="h1" color="error" align="center" gutterBottom>
                    Sorry, Page Not Found !
                </Typography>
            </Stack>
        </>
    );
};

export default PageNotFound;