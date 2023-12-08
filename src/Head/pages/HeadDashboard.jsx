import { Box, Button, Typography, useTheme, Stack } from '@mui/material';
import grey from '@mui/material/colors/grey';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import connectAPI from '../../connection/connectAPI';
import ResponsiveLineChart from '../components/charts/ResponsiveLineChart';
import PieChartComponent from '../components/charts/PieChartComponent';
import DoughnutComponent from '../components/charts/DoughnutComponent';
import AssessmentIcon from '@mui/icons-material/Assessment';
import WomanIcon from '@mui/icons-material/Woman';
import BoyIcon from '@mui/icons-material/Boy';
import { toast } from 'react-toastify';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useMemo, useState } from 'react';
import GenerateReport from '../dialogs/GenerateReport';

const HeadDashboard = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [dashData, setDashData] = useState({});
  const [rows, setRowData] = useState([]);

  useEffect(() => {
    connectAPI
      .get('/head/dashboard')
      .then(res => setDashData(res.data))
      .catch(() => console.error('error fetching dashboard data'));
  }, []);

  useEffect(() => {
    (async function () {
      try {
        const res = await connectAPI.get('/applications/logs/');
        if (res.status === 200) {
          setRowData(res.data);
        }
      } catch (error) {
        toast.error('Error fetching data ' + error.message);
      }
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'application_reference_id',
        headerName: 'Application ID',
        width: 200,
      },
      { field: 'officer_username', headerName: 'Officer Handler', width: 200 },
      {
        field: 'action_type',
        headerName: 'Action',
        width: 200,
      },
      {
        field: 'timestamp',
        headerName: 'Timestamp',
        width: 300,
      },
    ],
    []
  );

  return (
    <Box m="25px">
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
            type="button"
            onClick={() => setOpen(true)}
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
            <AssessmentIcon
              sx={{
                mr: '10px',
              }}
            />
            Generate Report
          </Button>
        </Box>
      </Box>

      {/* Dashboard container */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        height="100%"
        marginTop="25px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="#f5f5f5"
          padding="2rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ borderLeft: `10px solid #ff5722` }}
        >
          <Stack spacing={1}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'light' }}>
              Total Applicant
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {dashData.total_applicants_count}
            </Typography>
          </Stack>

          <PersonIcon sx={{ fontSize: '5rem', color: '#ff5722' }} />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor="#f5f5f5"
          padding="2rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ borderLeft: `10px solid #52b202` }}
        >
          <Stack spacing={1}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'light' }}>
              Graduating Scholars
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {dashData.graduating_scholars_count}
            </Typography>
          </Stack>

          <SchoolIcon sx={{ fontSize: '5rem', color: '#52b202' }} />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor="#f5f5f5"
          padding="2rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ borderLeft: `10px solid #2a3eb1` }}
        >
          <Stack spacing={1}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'light' }}>
              Total Male Applicants
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {dashData.male_applicants_count}
            </Typography>
          </Stack>

          <BoyIcon sx={{ fontSize: '5rem', color: '#2a3eb1' }} />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor="#f5f5f5"
          padding="2rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ borderLeft: `10px solid #ab003c` }}
        >
          <Stack spacing={1}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'light' }}>
              Total Male Applicants
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {dashData.female_applicants_count}
            </Typography>
          </Stack>

          <WomanIcon sx={{ fontSize: '5rem', color: '#ab003c' }} />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          marginTop="25px"
          p="20px"
          backgroundColor={grey[100]}
        >
          <Typography variant="h4" fontWeight="600">
            Yearly Scholarship Count
          </Typography>
          <Box height="350px" m="-20px 0 0 0">
            <ResponsiveLineChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          width="100%"
          p="35px 12px"
          backgroundColor={grey[100]}
        >
          <Typography textAlign="center" variant="h5" fontWeight="600">
            New and Renewal Applicant Count
          </Typography>
          <Box height="350px" m="-20px 0 0 0">
            <PieChartComponent />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={grey[100]}
          p="35px 12px"
        >
          <Typography variant="h5" fontWeight="600">
            Applicant Status
          </Typography>
          <Box height="350px" m="12px 0 0 0">
            <DoughnutComponent />
          </Box>
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 3"
          // backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: '15px' }}
          >
            Logs
          </Typography>
          <Box height="350px">
            <DataGrid
              checkboxSelection
              isCellEditable={false}
              rows={rows.map((value, i) => ({ id: i, ...value }))}
              columns={columns}
            />
          </Box>
        </Box>
      </Box>

      <GenerateReport open={open} setOpen={setOpen} dashData={dashData} />
    </Box>
  );
};

export default HeadDashboard;
