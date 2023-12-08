import { Box, Button, Stack } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { toast } from 'react-toastify';
import connectAPI from '../../../connection/connectAPI';
import { useEffect, useState } from 'react';
import LoadingPage from '../../../LoadingPage';

const ForecastingChart = () => {
  const [imgNew] = useState(() =>
    localStorage.getItem('forecastDataNew')
      ? localStorage.getItem('forecastDataNew')
      : null
  );
  const [imgRenew] = useState(() =>
    localStorage.getItem('forecastDataRenew')
      ? localStorage.getItem('forecastDataRenew')
      : null
  );

  const [handleFile, setFile] = useState({
    name: '',
    value: null,
  });
  const [handleScholarType, setScholarType] = useState({
    name: '',
    value: null,
  });
  const [isLoading, setLoading] = useState(false);

  const handleFileSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append(handleFile.name, handleFile.value);
    formData.append(handleScholarType.name, handleScholarType.value);

    connectAPI
      .post('/head/forecasting/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        setLoading(false);
        console.log(res.data);
        return setTimeout(() => {
          localStorage.setItem(
            'forecastDataNew',
            JSON.stringify(res?.data?.forecast_new_plot)
          );
          localStorage.setItem(
            'forecastDataRenew',
            JSON.stringify(res?.data?.forecast_renewing_plot)
          );
          window.location.reload();
        }, 3000);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
        toast.error(err.response.data.error);
      });
  };

  useEffect(() => {}, []);

  return (
    <>
      {isLoading && <LoadingPage />}
      <Box m="25px">
        <h1 className="text-center">Forecast Scholarship Trend</h1>
        <form
          className="mt-5"
          style={{ width: '300px' }}
          onSubmit={handleFileSubmit}
          encType="multipart/form-data"
        >
          <h6 className="mb-3 mt-5">
            Upload the csv file that contains the report of the scholarship{' '}
          </h6>
          <Stack spacing={2}>
            <select
              className="form-select"
              name="scholarship_type"
              id="scholarship_type"
              onChange={e =>
                setScholarType({
                  ...handleScholarType,
                  name: e.target.name,
                  value: e.target.value,
                })
              }
              required
            >
              <option value="" selected>
                Choose Scholarship Type...
              </option>
              <option value="BASIC PLUS SUC">BASIC PLUS SUC</option>
              <option value="SUC_LCU">SUC/LCU</option>
              <option value="BASIC SCHOLARSHIP">BASIC SCHOLARSHIP</option>
              <option value="HONORS">HONORS</option>
              <option value="PRIORITY">PRIORITY</option>
              <option value="PREMIER">PREMIER</option>
            </select>
            <input
              className="form-control"
              type="file"
              name="file"
              onChange={e =>
                setFile({
                  ...handleFile,
                  name: e.target.name,
                  value: e.target.files[0],
                })
              }
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<CloudUpload />}
            >
              Upload CSV File
            </Button>
          </Stack>
        </form>

        <Box marginTop="50px">
          <Box marginY="30px">
            <h5>New Scholar Data Plot</h5>
            <img
              src={`data:image/png;base64,${JSON.parse(imgNew)}`}
              alt="new scholar plot"
            />
          </Box>
          <Box marginY="30px">
            <h5>Renewing Scholar Data Plot</h5>
            <img
              src={`data:image/png;base64,${JSON.parse(imgRenew)}`}
              alt="renewing scholar plot"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ForecastingChart;
