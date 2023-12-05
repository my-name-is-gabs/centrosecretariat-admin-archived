import connectAPI from '../../../connection/connectAPI';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import ScholarDetailButton from '../../components/ScholarDetailButton';
import ScholarDetail from '../../dialogs/ScholarDetail';

const ScholarAccountList = () => {
  const [rows, setRowData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await connectAPI.get('/accounts/users/scholars/');
        setRowData(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'username',
        headerName: 'Username',
        width: 130,
      },
      { field: 'email', headerName: 'Email', width: 280 },
      {
        field: 'years_of_residency',
        headerName: 'Years of Residency',
        width: 200,
      },
      {
        field: 'scholarship_type',
        headerName: 'Scholarship Type',
        width: 200,
      },
      {
        field: 'is_graduating',
        headerName: 'Graduating',
        width: 150,
      },
      {
        field: 'is_active',
        headerName: 'Active',
        width: 150,
      },
      {
        field: 'actions',
        headerName: 'Action',
        type: 'actions',
        renderCell: params => (
          <ScholarDetailButton params={params} rows={rows} />
        ),
      },
    ],
    [rows]
  );
  return (
    <Box m="25px">
      <Typography variant="h4" fontWeight="bold">
        Scholar Account List
      </Typography>

      {/* Scholar Accounts Table */}
      <Box height="500px" width="95%" marginTop="30px">
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

      <ScholarDetail />
    </Box>
  );
};

export default ScholarAccountList;
