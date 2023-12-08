import { Box, Container } from '@mui/material';
import ResponsivePieChart from '../../components/charts/ResponsivePieChart';
import connectAPI from '../../../connection/connectAPI';
import { useEffect } from 'react';
import { useState } from 'react';

const PieChart = () => {
  const [newApplicantData, setNewApplicant] = useState(null);
  const [renewalApplicantData, setRenewalApplicant] = useState(null);

  useEffect(() => {
    (function () {
      connectAPI
        .get('/head/data/applicant-status/')
        .then(res => {
          setNewApplicant(() => res.data.new_applicants_count);
          setRenewalApplicant(() => res.data.renewing_applicants_count);
        })
        .catch(err => console.error(err));
    })();
  }, []);

  return (
    <Box m="25px">
      <h1 className="text-center">Pie chart</h1>

      <Container sx={{ marginTop: '50px', height: '500px' }}>
        <ResponsivePieChart
          data={[
            {
              id: 'New Applicants',
              label: 'New Applicants',
              value: newApplicantData,
            },
            {
              id: 'Renewal Applicants',
              lable: 'Renewal Applicants',
              value: renewalApplicantData,
            },
          ]}
        />
      </Container>
    </Box>
  );
};

export default PieChart;
