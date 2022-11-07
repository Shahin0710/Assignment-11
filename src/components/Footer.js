import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright ©'}
      <Link color="inherit" href="/">
        SD Photographers. 
      </Link>{' '}
      {' All rights reserved 2022.'}
    </Typography>
  );
}

const Footer = function () {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          SD Photographers
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          SD Photographers is the first online platform 
          for photographers in Bangladesh. The professional 
          photographer's directory comes to you where you can 
          find professional photographers in quick, convenient,
          & efficient manner.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
