import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import { deepOrange } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';
import './landing.css';

const OfficerButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[500]),
  backgroundColor: blueGrey[500],
  '&:hover': {
    backgroundColor: blueGrey[700],
  },
}));

const HeadButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepOrange[500]),
  backgroundColor: deepOrange[500],
  '&:hover': {
    backgroundColor: deepOrange[700],
  },
}));

const Landing = () => {
  return (
    <>
      <Box display="flex" height="100%" minHeight="100vh">
        <Box width="70%">
          <div className="landing--image"></div>
        </Box>
        <Box
          width="30%"
          height="100%"
          bgcolor="#223d7e"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          position="relative"
        >
          <div className="landing--logo-container">
            <img src="/assets/logo_degree.png" alt="Logo" />
            <div className="landing--text-container">
              <h3>ABC City</h3>
              <p>Scholarship Programs</p>
            </div>
          </div>

          <Box
            display="flex"
            flexDirection="column"
            gap="20px"
            marginTop="100px"
          >
            <NavLink
              to="/scholar-officer/login"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <OfficerButton
                variant="contained"
                size="large"
                sx={{ padding: '20px 50px', fontSize: '1.2rem' }}
              >
                Scholar Officer
              </OfficerButton>
            </NavLink>

            <NavLink
              to="/head-officer/login"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <HeadButton
                variant="contained"
                size="large"
                sx={{ padding: '20px 50px', fontSize: '1.2rem', width: '100%' }}
              >
                Head Officer
              </HeadButton>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
