import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useContext } from 'react';
import ListDetailContext from '../context/ListDetailContext.jsx';

const OfficerDetail = () => {
  const { openDialog, setOpenDialog, fetchListData } =
    useContext(ListDetailContext);

  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullWidth
    >
      <DialogTitle id="scroll-dialog-title">
        <Typography>
          Officer ID:{' '}
          <span style={{ fontWeight: 'bold' }}>{fetchListData?.username}</span>
        </Typography>
      </DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText
          id="scroll-dialog-description"
          tabIndex={1}
          color="neutral"
        >
          <Typography>
            First name:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchListData.profile?.firstname}
            </span>
          </Typography>

          <Typography>
            Middle name:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchListData.profile?.middlename}
            </span>
          </Typography>

          <Typography>
            Last name:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchListData.profile?.lastname}
            </span>
          </Typography>

          <Typography>
            Birthdate:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchListData.profile?.birthdate}
            </span>
          </Typography>

          <Typography>
            Gender:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchListData.profile?.gender === 1 ? 'Male' : 'Female'}
            </span>
          </Typography>

          <br />

          <Typography>
            House Address:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchListData.profile?.house_address}
            </span>
          </Typography>

          <Typography>
            Barangay:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchListData.profile?.barangay.toLowerCase()}
            </span>
          </Typography>

          <Typography>
            District:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchListData.profile?.district.toLowerCase()}
            </span>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setOpenDialog(false)}
          variant="contained"
          color="secondary"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OfficerDetail;
