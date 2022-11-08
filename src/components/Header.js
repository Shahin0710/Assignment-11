import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import TopBanner from './TopBanner';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Service', url: '/service' },
  { title: 'Review', url: '/review' },
  { title: 'Blog', url: '/blog' },
  { title: 'Contact', url: '/contact' },
];

  // A STYLE SHEET
  const useStyles = makeStyles()((theme) => {
    return {
      navLink: {
          textDecoration: 'none',
          color: 'inherit',
      },
      navLinkActive: {
          textDecoration: 'none',
          color: 'orange',
      },
    };
  });

const Header = function () {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          SD Photographers
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" onClick={() => navigate('/signup')}>
          Sign up
        </Button>
        <Button variant="outlined" size="small" color='secondary' sx={{ ml: 1.5 }} onClick={() => navigate('/login')}>
          Sign in
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section, index) => (
          <NavLink
            key={index}
            variant="body2"
            to={section?.url}
            sx={{ p: 1, flexShrink: 0 }}
            className={
                location.pathname === section?.url
                    ? classes.navLinkActive
                    : classes.navLink
            }
          >
            {section.title}
          </NavLink>
        ))}
      </Toolbar>
      <TopBanner />
    </React.Fragment>
  );
};

export default Header;
