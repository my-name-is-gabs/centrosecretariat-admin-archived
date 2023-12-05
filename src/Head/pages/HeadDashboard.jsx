import { Box, Button, Typography, useTheme } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const HeadDashboard = () => {
  const theme = useTheme();
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box mb="30px">
          <Typography
            variant="h4"
            color={theme.palette.neutral.dark}
            fontWeight="bold"
            sx={{ m: '0 0 5px 0' }}
          >
            DASHBOARD
          </Typography>
          <Typography variant="h6" color={theme.palette.secondary.main}>
            Welcome to your dashboard
          </Typography>
        </Box>

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
              ':hover': {
                background: theme.palette.secondary.main,
                color: 'white',
              },
            }}
          >
            <DownloadOutlinedIcon
              sx={{
                mr: '10px',
              }}
            />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Dashboard container */}
    </Box>
  );
};

export default HeadDashboard;
