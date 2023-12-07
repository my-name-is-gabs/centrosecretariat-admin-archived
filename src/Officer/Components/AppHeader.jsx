import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useContext, useState } from 'react';
import AuthContext from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AppHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMenu = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar sx={styles} position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
          Centro Secretariat
        </Typography>
        <MenuItem onClick={() => navigate('/scholar-officer/')}>Home</MenuItem>
        <Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                navigate('/scholar-officer/profile/');
                handleClose();
              }}
            >
              Profile
            </MenuItem>
            <MenuItem onClick={logoutUser}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: 'primary.main',
  },
  zIndex: '1',
};

export default AppHeader;
