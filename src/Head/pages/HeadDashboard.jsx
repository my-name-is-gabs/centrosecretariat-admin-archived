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
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="#f5f5f5"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          /> */}
          stat box 4
        </Box>
        <Box
          gridColumn="span 3"
          // backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          /> */}
          stat box 3
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          // backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600">
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                // color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            {/* <LineChart isDashboard={true} /> */}
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          // backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // borderBottom={`4px solid ${colors.primary[500]}`}
            // colors={colors.grey[100]}
            p="15px"
          >
            <Typography variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          // backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            {/* <ProgressCircle size="125" /> */}
            <Typography
              variant="h5"
              // color={colors.greenAccent[500]}
              sx={{ mt: '15px' }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          // backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: '30px 30px 0 30px' }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            {/* <BarChart isDashboard={true} /> */}
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          // backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: '15px' }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            {/* <GeographyChart isDashboard={true} /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeadDashboard;
