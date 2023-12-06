import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState, useMemo } from 'react';
import connectAPI from '../../../connection/connectAPI';
import ApplicationDetailButton from '../../components/ApplicationDetailButton';
import ApplicantDetail from '../../dialogs/ApplicantDetail';

const ApplicantTable = () => {
  const [rows, setRowData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await connectAPI.get('/applications/all');
        setRowData(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'application_reference_id',
        headerName: 'Application ID',
        width: 130,
      },
      { field: 'email_address', headerName: 'Email', width: 300 },
      {
        field: 'barangay',
        headerName: 'Barangay',
        width: 250,
      },
      {
        field: 'scholarship_type',
        headerName: 'Scholarship Type',
        width: 200,
      },
      {
        field: 'applicant_status',
        headerName: 'Applicant Status',
        width: 150,
      },
      {
        field: 'application_status',
        headerName: 'Application Status',
        width: 150,
      },
      {
        field: 'actions',
        headerName: 'Action',
        type: 'actions',
        width: 150,
        renderCell: params => (
          <ApplicationDetailButton params={params} rows={rows} />
        ),
      },
    ],
    [rows]
  );

  return (
    <Box m="25px">
      <h1 className="text-center fw-bold">Applicant Table</h1>

      <Box height="500px" width="90%" marginTop="30px">
        <DataGrid
          checkboxSelection
          isCellEditable={false}
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>

      <ApplicantDetail />
    </Box>
  );
};

export default ApplicantTable;
