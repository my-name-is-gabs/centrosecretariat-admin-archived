import { Box, Container } from '@mui/material';
import DoughnutComponent from '../../components/charts/DoughnutComponent';

const DoughnutChart = () => {
  return (
    <Box m="25px">
      <h1 className="text-center">Doughnut chart</h1>

      <Container sx={{ marginTop: '50px', height: '500px' }}>
        <DoughnutComponent />
      </Container>
    </Box>
  );
};

export default DoughnutChart;
