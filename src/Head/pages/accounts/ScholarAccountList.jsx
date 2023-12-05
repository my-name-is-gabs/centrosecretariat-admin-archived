import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'application_reference_id',
    headerName: 'Application ID',
    width: 130,
    editable: false,
  },
  { field: 'email_address', headerName: 'Email', editable: false, width: 280 },
  {
    field: 'barangay',
    headerName: 'Barangay',
    width: 200,
    editable: false,
  },
  {
    field: 'scholarship_type',
    headerName: 'Scholarship Type',
    width: 200,
    editable: false,
  },
  {
    field: 'applicant_status',
    headerName: 'Applicant Status',
    width: 200,
    editable: false,
  },
  {
    field: 'application_status',
    headerName: 'Application Status',
    width: 200,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    application_reference_id: 'S-2023-00001',
    email_address: 'samp@gmail.com',
    barangay: 'BARANGAY NAME 1',
    scholarship_type: 'BASIC SCHOLARSHIP',
    applicant_status: 'NEW APPLICANT',
    application_status: 'ACCEPTED',
  },
  {
    id: 2,
    application_reference_id: 'S-2023-00002',
    email_address: 'samp@gmail.com',
    barangay: 'BARANGAY NAME 2',
    scholarship_type: 'BASIC SCHOLARSHIP',
    applicant_status: 'NEW APPLICANT',
    application_status: 'ACCEPTED',
  },
  {
    id: 3,
    application_reference_id: 'S-2023-00003',
    email_address: 'samp@gmail.com',
    barangay: 'BARANGAY NAME 3',
    scholarship_type: 'BASIC SCHOLARSHIP',
    applicant_status: 'NEW APPLICANT',
    application_status: 'ACCEPTED',
  },
  {
    id: 4,
    application_reference_id: 'S-2023-00004',
    email_address: 'samp@gmail.com',
    barangay: 'BARANGAY NAME 4',
    scholarship_type: 'BASIC SCHOLARSHIP',
    applicant_status: 'NEW APPLICANT',
    application_status: 'ACCEPTED',
  },
  {
    id: 5,
    application_reference_id: 'S-2023-00005',
    email_address: 'samp@gmail.com',
    barangay: 'BARANGAY NAME 5',
    scholarship_type: 'BASIC SCHOLARSHIP',
    applicant_status: 'NEW APPLICANT',
    application_status: 'ACCEPTED',
  },
];

const ScholarAccountList = () => {
  return (
    <Box m="25px">
      <Typography variant="h4" fontWeight="bold">
        Scholar List
      </Typography>

      {/* Scholar Accounts Table */}
      <Box width="100%" height="500px" marginTop="30px">
        <DataGrid
          rows={rows}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Box>
  );
};

export default ScholarAccountList;
