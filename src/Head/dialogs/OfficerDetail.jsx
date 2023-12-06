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
import moment from 'moment';

const OfficerDetail = () => {
  const { openDialog, setOpenDialog, fetchOfficerProfile, officerUname } =
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
          Officer UID:{' '}
          <span style={{ fontWeight: 'bold' }}>{officerUname}</span>
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
              {fetchOfficerProfile?.firstname}
            </span>
          </Typography>

          <Typography>
            Middle name:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchOfficerProfile?.middlename}
            </span>
          </Typography>

          <Typography>
            Last name:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchOfficerProfile?.lastname}
            </span>
          </Typography>

          <Typography>
            Birthdate:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {moment(new Date(fetchOfficerProfile?.birthdate)).format('LL')}
            </span>
          </Typography>

          <Typography>
            Gender:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchOfficerProfile?.gender === 1
                ? 'Male'
                : fetchOfficerProfile?.gender === 2
                ? 'Female'
                : null}
            </span>
          </Typography>

          <br />

          <Typography>
            House Address:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchOfficerProfile?.house_address}
            </span>
          </Typography>

          <Typography>
            Barangay:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchOfficerProfile?.barangay.toLowerCase()}
            </span>
          </Typography>

          <Typography>
            District:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchOfficerProfile?.district.toLowerCase()}
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
