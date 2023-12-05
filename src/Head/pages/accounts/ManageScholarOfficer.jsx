import {
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  MenuItem,
} from '@mui/material';
import connectAPI from '../../../connection/connectAPI';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/tl-ph';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect } from 'react';
import { useState } from 'react';
import ViewOfficerDetailButton from '../../components/OfficerDetailButton';
import { useMemo } from 'react';
import OfficerDetail from '../../dialogs/OfficerDetail';
import moment from 'moment';
import { toast } from 'react-toastify';
import LoadingPage from '../../../LoadingPage';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email format').required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  middlename: yup.string().required(),
  house_address: yup.string().required(),
  barangay: yup.string().required(),
  birthdate: yup
    .date()
    .typeError('Invalid date format')
    .min('1940')
    .max('2005')
    .required(),
  gender: yup.number().positive().required(),
});

const initialValues = {
  email: '',
  firstname: '',
  lastname: '',
  middlename: '',
  house_address: '',
  barangay: null,
  birthdate: null,
  gender: null,
};

const ManageScholarOfficer = () => {
  const [rows, setRowContent] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const columns = useMemo(
    () => [
      {
        field: 'username',
        headerName: 'Username',
        hideable: false,
        width: 150,
      },
      { field: 'email', headerName: 'Email', width: 300 },
      { field: 'is_active', headerName: 'Active' },
      { field: 'role', headerName: 'Role' },
      {
        field: 'actions',
        headerName: 'Action',
        type: 'actions',
        renderCell: params => (
          <ViewOfficerDetailButton params={params} rows={rows} />
        ),
      },
    ],
    [rows]
  );

  useEffect(() => {
    (async function () {
      try {
        const res = await connectAPI.get('/accounts/users/staff/');
        setRowContent(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: value => {
      setLoading(true);
      connectAPI
        .post(
          '/accounts/users/staff/create/',
          JSON.stringify({
            email: value.email,
            profile: {
              firstname: value.firstname,
              lastname: value.lastname,
              middlename: value.middlename,
              house_address: value.house_address,
              barangay: value.barangay,
              birthdate: moment(new Date(value.birthdate)).format('YYYY-MM-DD'),
              gender: value.gender,
            },
          })
        )
        .then(() => {
          setLoading(false);
          toast.success('Officer created successfully');
        })
        .catch(() => {
          setLoading(false);
          toast.error('Bad request, something went wrong in sending data');
        })
        .finally(() => {
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        });
    },
  });

  return (
    <>
      {isLoading && <LoadingPage />}
      <Box m="25px">
        <Typography textAlign="center" variant="h4" fontWeight="bold">
          Manage Scholar Officer
        </Typography>

        <Typography
          fontWeight="bold"
          variant="h5"
          sx={{
            borderBottom: '1px solid grey',
            paddingBottom: '3px',
            marginY: '25px',
          }}
        >
          Add Scholar Officer
        </Typography>

        <form
          onSubmit={formik.handleSubmit}
          style={{
            marginTop: '40px',
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            gap="30px"
            alignItems="center"
          >
            <Stack gap={1} width="100%">
              <TextField
                fullWidth
                variant="outlined"
                type="email"
                label="Email"
                name="email"
                id="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <TextField
                fullWidth
                type="text"
                variant="outlined"
                label="First name"
                id="firstname"
                name="firstname"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstname && Boolean(formik.errors.firstname)
                }
                helperText={formik.touched.firstname && formik.errors.firstname}
              />

              <TextField
                fullWidth
                type="text"
                variant="outlined"
                label="Middle name"
                id="middlename"
                name="middlename"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.middlename && Boolean(formik.errors.middlename)
                }
                helperText={
                  formik.touched.middlename && formik.errors.middlename
                }
              />

              <TextField
                fullWidth
                type="text"
                variant="outlined"
                label="Last name"
                id="lastname"
                name="lastname"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
            </Stack>

            <Stack gap={1} width="100%">
              <TextField
                fullWidth
                type="text"
                variant="outlined"
                label="Home Address"
                id="house_address"
                name="house_address"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.house_address &&
                  Boolean(formik.errors.house_address)
                }
                helperText={
                  formik.touched.house_address && formik.errors.house_address
                }
              />

              <TextField
                fullWidth
                select
                variant="outlined"
                label="Barangay"
                id="barangay"
                name="barangay"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.barangay && Boolean(formik.errors.barangay)
                }
                helperText={formik.touched.barangay && formik.errors.barangay}
                defaultValue=""
              >
                {barangayOptions.map((value, i) => (
                  <MenuItem key={i} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>

              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="tl-ph"
              >
                <DatePicker
                  label="Date of Birth"
                  format="YYYY-MM-DD"
                  onChange={value =>
                    formik.setFieldValue('birthdate', value, true)
                  }
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      error:
                        formik.touched.birthdate &&
                        Boolean(formik.errors.birthdate),
                      helperText:
                        formik.touched.birthdate && formik.errors.birthdate,
                    },
                  }}
                />
              </LocalizationProvider>

              <TextField
                fullWidth
                select
                variant="outlined"
                label="Gender"
                id="gender"
                name="gender"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
                defaultValue=""
              >
                <MenuItem value={1}>Male</MenuItem>
                <MenuItem value={2}>Female</MenuItem>
              </TextField>
            </Stack>
          </Box>

          <Box display="flex" justifyContent="flex-end" marginTop="40px">
            <Button type="submit" variant="contained">
              Add <AddIcon />
            </Button>
          </Box>
        </form>

        <Box height="350px" marginTop="50px" marginBottom="50px">
          <DataGrid
            checkboxSelection
            columns={columns}
            isCellEditable={false}
            rows={rows}
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </Box>

        {/* Modal Box */}
        <OfficerDetail />
      </Box>
    </>
  );
};

const barangayOptions = [
  'BAGUMBAYAN',
  'BAMBANG',
  'CALZADA',
  'HAGONOY',
  'IBAYO TIPAS',
  'LIGID TIPAS',
  'LOWER BICUTAN',
  'NEW LOWER BICUTAN',
  'NAPINDAN',
  'PALINGON',
  'SAN MIGUEL',
  'SANTA ANA',
  'TUKTUKAN',
  'USUSAN',
  'WAWA',
  'BAGONG TANYAG',
  'CENTRAL BICUTAN',
  'CENTRAL SIGNAL VILLAGE',
  'FORT BONIFACIO',
  'KATUPARAN',
  'MAHARLIKA VILLAGE',
  'NORTH DAANG HARI',
  'NORTH SIGNAL VILLAGE',
  'PINAGSAMA',
  'SOUTH DAANG HARI',
  'SOUTH SIGNAL VILLAGE',
  'UPPER BICUTAN',
  'WESTERN BICUTAN',
];

export default ManageScholarOfficer;
