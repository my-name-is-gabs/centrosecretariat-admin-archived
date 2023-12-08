import { Box, Container } from '@mui/material';
import ResponsiveLineChart from '../../components/charts/ResponsiveLineChart';
import { useState } from 'react';

const LineChart = () => {
  const [filterSem, setSemester] = useState('FIRST SEMESTER');
  return (
    <Box m="25px">
      <h1 className="text-center">Line Chart</h1>
      <Box width="300px" display="block">
        <h5>Select semester to filter</h5>
        <select
          name="filter_sem"
          id="filter"
          className="form-select mt-3"
          onChange={e => setSemester(e.target.value)}
        >
          <option value="FIRST SEMESTER">FIRST SEMESTER</option>
          <option value="SECOND SEMESTER">SECOND SEMESTER</option>
        </select>
      </Box>
      <Container sx={{ marginTop: '20px', height: '500px' }}>
        <ResponsiveLineChart filterSem={filterSem} />
      </Container>
    </Box>
  );
};

export default LineChart;
