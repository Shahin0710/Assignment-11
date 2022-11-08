import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const post = {
  title: 'BEST PHOTOGRAPHERS',
  description:
    " HIRE A PHOTOGRAPHER / CINEMATOGRAPHER. For Any Event, Anywhere in Bangladesh ",
    // image: 'https://source.unsplash.com/random',
  image: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_960_720.jpg',
  imageText: 'main image',
  linkText: 'Contact with us',
};

const TopBanner = function () {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="/contact">
              {post.linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TopBanner;
