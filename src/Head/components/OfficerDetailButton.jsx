/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import { useContext } from 'react';
import ListDetailContext from '../context/ListDetailContext.jsx';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ViewOfficerDetailButton = ({ params, rows }) => {
  const { setOfficerUname, setOpenDialog } = useContext(ListDetailContext);
  return (
    <>
      <Button
        variant="contained"
        size="small"
        onClick={() => {
          setOfficerUname(rows.find(item => params.id === item.id).username);
          setOpenDialog(true);
        }}
      >
        view <VisibilityIcon style={{ marginLeft: '4px' }} />
      </Button>
    </>
  );
};

export default ViewOfficerDetailButton;
