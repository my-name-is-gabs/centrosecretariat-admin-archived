import { Box, Container, Stack, Button } from '@mui/material';
import ResponsiveLineChart from '../../components/charts/ResponsiveLineChart';
import { useState } from 'react';
import connectAPI from '../../../connection/connectAPI';
import { useNavigate } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';

const LineChart = () => {
  const [filterSem, setSemester] = useState('FIRST SEMESTER');
  const navigate = useNavigate();

  const downloadYearlyReport = async () => {
    try {
      const res = await connectAPI.get(
        '/head/data/yearly-scholarship-performance/download-csv/'
      );
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      const fileName = `yearly_csv_${new Date().getFullYear()}.csv`;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert(`Something went wrong: ${error.message}`);
      if (error.response.status === 401) {
        alert('Session has expired');
        navigate('/');
      }
    }
  };

  return (
    <Box m="25px">
      <h1 className="text-center">Line Chart</h1>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
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

        <Box>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={downloadYearlyReport}
          >
            Download CSV File
          </Button>
        </Box>
      </Stack>

      <Container sx={{ marginTop: '20px', height: '500px' }}>
        <ResponsiveLineChart filterSem={filterSem} />
      </Container>
    </Box>
  );
};

export default LineChart;
