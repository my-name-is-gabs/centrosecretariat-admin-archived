/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PrintIcon from '@mui/icons-material/Print';
import { useContext, useRef } from 'react';
import ListDetailContext from '../context/ListDetailContext';
import connectAPI from '../../connection/connectAPI';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const GenerateReport = ({ open, setOpen, dashData }) => {
  const { univName } = useContext(ListDetailContext);
  const printPageRef = useRef();
  const navigate = useNavigate();

  const download_csv = async () => {
    try {
      const res = await connectAPI.get('/head/dashboard/download-csv/');
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      const fileName = `Dashboard Report ${new Date().getFullYear()}.csv`;
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

  const handlePrint = useReactToPrint({
    content: () => printPageRef.current,
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      scroll="paper"
      fullWidth
    >
      <DialogTitle
        sx={{ m: 0, p: 3, fontWeight: 'bold' }}
        id="customized-dialog-title"
      >
        Generated Report
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent ref={printPageRef} dividers>
        <Typography gutterBottom variant="h4" fontWeight="bold">
          Scholarship Status Report
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginY: '30px',
          }}
        >
          <Typography gutterBottom>
            <h6>
              Total Applicant:{' '}
              <strong>{dashData?.total_applicants_count}</strong>
            </h6>
          </Typography>
          <Typography gutterBottom>
            <h6>
              Total New Applicant:{' '}
              <strong>{dashData?.new_applicants_count}</strong>
            </h6>
          </Typography>
          <Typography gutterBottom>
            <h6>
              Total Renewing Applicant:{' '}
              <strong>{dashData?.renewing_applicants_count}</strong>
            </h6>
          </Typography>
          <Typography gutterBottom>
            <h6>
              Total Graduating Applicant:{' '}
              <strong>{dashData?.graduating_scholars_count}</strong>
            </h6>
          </Typography>
          <Typography gutterBottom>
            <h6>
              Total Pending Applicant:{' '}
              <strong>{dashData?.total_pending_applications_count}</strong>
            </h6>
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '5px',
            marginY: '30px',
          }}
        >
          <h4 className="fw-bold">Gender Ratio</h4>
          <Typography gutterBottom>
            <h6>
              Total Male Applicant:{' '}
              <strong>{dashData?.male_applicants_count}</strong>
            </h6>
          </Typography>
          <Typography gutterBottom>
            <h6>
              Total Female Applicant:{' '}
              <strong>{dashData?.female_applicants_count}</strong>
            </h6>
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginY: '30px',
          }}
        >
          <h4 className="fw-bold">Quantity Per Scholarship Type</h4>
          {dashData?.scholarship_type_count?.map((values, i) => (
            <Typography key={i} gutterBottom>
              <h6>
                {values.scholarship_type}: <strong>{values.count}</strong>
              </h6>
            </Typography>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginY: '30px',
          }}
        >
          <h4 className="fw-bold">Top Schools With Most Applicant</h4>
          {dashData?.top_schools_count?.map((values, i) => (
            <Typography key={i} gutterBottom>
              <h6>
                School Name:{' '}
                <strong>
                  {
                    univName.find(
                      item => item.id === values.university_attending
                    )?.university_name
                  }
                </strong>
              </h6>
              <p>
                Total Applicant: <strong>{values.count}</strong>
              </p>
            </Typography>
          ))}
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: '1rem' }}>
        <Button
          autoFocus
          variant="contained"
          onClick={handlePrint}
          startIcon={<PrintIcon />}
        >
          Print Report
        </Button>
        <Button
          autoFocus
          variant="contained"
          color="secondary"
          onClick={download_csv}
          startIcon={<DownloadOutlinedIcon />}
        >
          Download CSV
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GenerateReport;
