import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const theme = createTheme();

const ComponentsLayout = ({ children }) => {
    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
          <Header />
              <main>{children}</main>
          <Footer />
      </Container>
    </ThemeProvider>
    );
};

export default ComponentsLayout;
