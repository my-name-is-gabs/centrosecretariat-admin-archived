import { Box, Container } from '@mui/material';
import PieChartComponent from '../../components/charts/PieChartComponent';

const PieChart = () => {
  return (
    <Box m="25px">
      <h1 className="text-center">Pie chart</h1>

      <Container sx={{ marginTop: '50px', height: '500px' }}>
        <PieChartComponent />
      </Container>
    </Box>
  );
};

export default PieChart;
