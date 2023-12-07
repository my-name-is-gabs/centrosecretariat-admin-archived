import { ThemeProvider, CssBaseline, Box, Container } from '@mui/material';
import theme from '../../config/theme';
import AppHeader from '../components/AppHeader';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const OfficerBase = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader setToggleNav={setToggleNav} toggleNav={toggleNav} />
        <Box
          display="flex"
          position="relative"
          width="100%"
          height="100%"
          marginTop="55px"
        >
          <Container>
            <Outlet />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default OfficerBase;
