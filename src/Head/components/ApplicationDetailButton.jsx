/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import { useContext } from 'react';
import ListDetailContext from '../context/ListDetailContext.jsx';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ApplicationDetailButton = ({ params, rows }) => {
  const { setApplicantUname, setOpenDialog } = useContext(ListDetailContext);
  return (
    <>
      <Button
        variant="contained"
        size="small"
        onClick={() => {
          setApplicantUname(
            rows.find(item => params.id === item.id).application_reference_id
          );
          setOpenDialog(true);
        }}
      >
        view <VisibilityIcon style={{ marginLeft: '4px' }} />
      </Button>
    </>
  );
};

export default ApplicationDetailButton;
