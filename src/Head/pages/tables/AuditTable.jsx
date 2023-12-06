import { Box } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import connectAPI from '../../../connection/connectAPI';
import { toast } from 'react-toastify';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const AuditTable = () => {
  const [rows, setRowData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await connectAPI.get('/applications/logs/');
        if (res.status === 200) {
          setRowData(res.data);
        }
      } catch (error) {
        toast.error('Error fetching data ' + error.message);
      }
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'application_reference_id',
        headerName: 'Application ID',
        width: 200,
      },
      { field: 'officer_username', headerName: 'Officer Handler', width: 200 },
      {
        field: 'action_type',
        headerName: 'Action',
        width: 200,
      },
      {
        field: 'timestamp',
        headerName: 'Timestamp',
        width: 300,
      },
    ],
    []
  );

  return (
    <Box m="25px">
      <h1 className="text-center fw-bold">Audit Trail</h1>

      <Box height="500px" width="95%" marginTop="30px">
        <DataGrid
          checkboxSelection
          isCellEditable={false}
          rows={rows.map((value, i) => ({ id: i, ...value }))}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default AuditTable;
