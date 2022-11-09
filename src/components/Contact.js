import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from './ComponentsLayout';
import PageTitle from './PageTitel';

const Contact = function () {
    PageTitle('Contact');

    return (
      <ComponentsLayout>
        <Box sx={{ my: 15 }}>
          <Box sx={{ paddingBottom: { xs: 1, sm: 1 } }}>
              <Typography variant="h4" sx={{ pt: { xs: 1, md: 0 }, mx: 2, mt: 5, fontWeight: '600' }}>
                  Please Contact
              </Typography>
              <Typography variant="h5" sx={{ pt: { xs: 1, md: 0 }, mx: 2, my: 2, fontWeight: '200' }}>
                  Based on build and profile, your feedback will be public 
                  and visible to external users.
              </Typography>
          </Box>
          <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <FacebookIcon />
                      </ListItemIcon>
                      <ListItemText primary="Join FaceBook" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <TwitterIcon />
                      </ListItemIcon>
                      <ListItemText primary="Join this Twitter" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InstagramIcon />
                      </ListItemIcon>
                      <ListItemText primary="Please Join Instagram" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <LinkedInIcon />
                      </ListItemIcon>
                      <ListItemText primary="You Can Join LinkedIn" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <h1>Address</h1>
                <List>
                  <ListItem disablePadding  sx={{ mb: 2 }}>
                      <ListItemIcon>
                        <LocationOnIcon />
                      </ListItemIcon>
                      <ListItemText primary="150 West Jurain, Shampur, Dhaka" />
                  </ListItem>
                  <ListItem disablePadding  sx={{ mb: 2 }}>
                      <ListItemIcon>
                        <LocalPhoneIcon />
                      </ListItemIcon>
                      <ListItemText primary="Help line: +880 123456789" />
                  </ListItem>
                  <ListItem disablePadding  sx={{ mb: 2 }}>
                      <ListItemIcon>
                        <EmailIcon />
                      </ListItemIcon>
                      <ListItemText primary="Email: xyz@gmail.com" />
                  </ListItem>
                </List>
              </Grid>
          </Grid>
        </Box>
      </ComponentsLayout>
    );
};

export default Contact;
