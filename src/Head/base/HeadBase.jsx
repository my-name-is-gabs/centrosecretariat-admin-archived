import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '../../config/theme';
import Sidenav from '../components/Sidenav';
import AppHeader from '../components/AppHeader';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const HeadBase = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader setToggleNav={setToggleNav} toggleNav={toggleNav} />
        <Box display="flex" position="relative" width="100%" height="100%">
          <Sidenav toggleNav={toggleNav} />
          <main className="content">
            <Outlet />
          </main>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default HeadBase;
