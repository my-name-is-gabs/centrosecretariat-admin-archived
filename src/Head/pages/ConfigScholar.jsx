/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Stack,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  MenuItem,
} from '@mui/material';
import { useState, useEffect } from 'react';
import connectAPI from '../../connection/connectAPI';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

const initialValues = {
  semester: '',
  minimum_residency: '',
  guardians_minimum_residency: '',
  voters_validity_year_start: '',
  voters_validity_year_end: '',
  is_ongoing: '',
};

const validationSchema = yup.object({
  semester: yup.string(),
  minimum_residency: yup.number().positive(),
  guardians_minimum_residency: yup.number().positive(),
  voters_validity_year_start: yup.number().positive(),
  voters_validity_year_end: yup.number().positive(),
  is_ongoing: yup.boolean(),
});

const EditConfigModal = ({ openDialog, setOpenDialog }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: value => {
      console.log(value);
      connectAPI
        .put('/applications/config/1/', JSON.stringify(value))
        .then(res => {
          if (res.status === 200) {
            toast.success('Eligibility updated!');
            setOpenDialog(false);
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
        })
        .catch(() =>
          toast.error('Something went wrong in changing eligibility')
        );
    },
  });

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
      >
        <DialogTitle id="scroll-dialog-title">
          <Typography>Edit Eligibility Config</Typography>
        </DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent dividers={true}>
            <DialogContentText
              id="scroll-dialog-description"
              tabIndex={1}
              color="neutral"
            >
              <Stack spacing={2}>
                <Box
                  display="inline-flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <h6 className="fw-bold">Semester:</h6>
                  <TextField
                    select
                    size="small"
                    id="semester"
                    name="semester"
                    placeholder=""
                    onChange={formik.handleChange}
                    error={
                      formik.touched.semester && Boolean(formik.errors.semester)
                    }
                    helperText={
                      formik.touched.semester && formik.errors.semester
                    }
                    required
                  >
                    <MenuItem value="FIRST SEMESTER">FIRST SEMESTER</MenuItem>
                    <MenuItem value="SECOND SEMESTER">SECOND SEMESTER</MenuItem>
                  </TextField>
                </Box>
                <Box
                  display="inline-flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <h6 className="fw-bold">Minimum residency:</h6>
                  <TextField
                    size="small"
                    type="number"
                    name="minimum_residency"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.minimum_residency &&
                      Boolean(formik.errors.minimum_residency)
                    }
                    helperText={
                      formik.touched.minimum_residency &&
                      formik.errors.minimum_residency
                    }
                    required
                  />
                </Box>
                <Box
                  display="inline-flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <h6 className="fw-bold">Guardians minimum residency:</h6>
                  <TextField
                    size="small"
                    type="number"
                    name="guardians_minimum_residency"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.guardians_minimum_residency &&
                      Boolean(formik.errors.guardians_minimum_residency)
                    }
                    helperText={
                      formik.touched.guardians_minimum_residency &&
                      formik.errors.guardians_minimum_residency
                    }
                    required
                  />
                </Box>
                <Box
                  display="inline-flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <h6 className="fw-bold">Voters validity year start:</h6>
                  <TextField
                    size="small"
                    type="number"
                    name="voters_validity_year_start"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.voters_validity_year_start &&
                      Boolean(formik.errors.voters_validity_year_start)
                    }
                    helperText={
                      formik.touched.voters_validity_year_start &&
                      formik.errors.voters_validity_year_start
                    }
                    required
                  />
                </Box>
                <Box
                  display="inline-flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <h6 className="fw-bold">Voters validity year end:</h6>
                  <TextField
                    size="small"
                    type="number"
                    name="voters_validity_year_end"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.voters_validity_year_end &&
                      Boolean(formik.errors.voters_validity_year_end)
                    }
                    helperText={
                      formik.touched.voters_validity_year_end &&
                      formik.errors.voters_validity_year_end
                    }
                    required
                  />
                </Box>
                <Box
                  display="inline-flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <h6 className="fw-bold">Is ongoing:</h6>
                  <TextField
                    size="small"
                    select
                    type="text"
                    name="is_ongoing"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.is_ongoing &&
                      Boolean(formik.errors.is_ongoing)
                    }
                    helperText={
                      formik.touched.is_ongoing && formik.errors.is_ongoing
                    }
                    required
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </TextField>
                </Box>
              </Stack>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              type="button"
              onClick={() => setOpenDialog(false)}
              variant="contained"
              color="danger"
            >
              Close
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

const ConfigScholar = () => {
  const [eligibilityData, setEligibility] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    connectAPI
      .get('/applications/config/1')
      .then(res => setEligibility(() => res.data))
      .catch(err =>
        console.error(`Error in fetching config data: ${err.message}`)
      );
  }, []);

  return (
    <Box m="25px">
      <h1 className="fw-bold">Eligibility Configuration</h1>

      <Box
        style={{
          width: '600px',
          boxShadow: '0 0 6px rgba(0,0,0,0.3)',
          padding: '2rem',
          marginTop: '40px',
        }}
      >
        <Stack spacing={2}>
          <Box
            display="inline-flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <h6 className="fw-bold">Semester:</h6>
            <TextField
              size="small"
              name="semester"
              value={eligibilityData?.semester}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box
            display="inline-flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <h6 className="fw-bold">Minimum residency:</h6>
            <TextField
              size="small"
              type="number"
              name="minimum_residency"
              value={eligibilityData?.minimum_residency}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box
            display="inline-flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <h6 className="fw-bold">Guardians minimum residency:</h6>
            <TextField
              size="small"
              type="number"
              name="guardians_minimum_residency"
              value={eligibilityData?.guardians_minimum_residency}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box
            display="inline-flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <h6 className="fw-bold">Voters validity year start:</h6>
            <TextField
              size="small"
              type="number"
              name="voters_validity_year_start"
              value={eligibilityData?.voters_validity_year_start}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box
            display="inline-flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <h6 className="fw-bold">Voters validity year end:</h6>
            <TextField
              size="small"
              type="number"
              name="voters_validity_year_end"
              value={eligibilityData?.voters_validity_year_end}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box
            display="inline-flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <h6 className="fw-bold">Is ongoing:</h6>
            <TextField
              size="small"
              name="is_ongoing"
              value={eligibilityData?.is_ongoing}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Stack>
        {/* Button */}
        <Box
          display="inline-flex"
          justifyContent="end"
          gap="5px"
          width="100%"
          marginTop="35px"
        >
          <Button
            type="button"
            color="secondary"
            variant="contained"
            onClick={() => setOpenDialog(true)}
          >
            Edit
          </Button>
        </Box>
      </Box>

      <EditConfigModal openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Box>
  );
};

export default ConfigScholar;
