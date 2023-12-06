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

const ScholarDetail = () => {
  const { openDialog, setOpenDialog, fetchScholarProfile, scholarUname } =
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
          Scholar UID:{' '}
          <span style={{ fontWeight: 'bold' }}>{scholarUname}</span>
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
              {fetchScholarProfile?.firstname}
            </span>
          </Typography>

          <Typography>
            Middle name:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchScholarProfile?.middlename}
            </span>
          </Typography>

          <Typography>
            Last name:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchScholarProfile?.lastname}
            </span>
          </Typography>

          <Typography>
            Birthdate:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {moment(new Date(fetchScholarProfile?.birthdate)).format('LL')}
            </span>
          </Typography>

          <Typography>
            Gender:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchScholarProfile?.gender === 1
                ? 'Male'
                : fetchScholarProfile?.gender === 2
                ? 'Female'
                : null}
            </span>
          </Typography>

          <br />

          <Typography>
            House Address:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchScholarProfile?.house_address}
            </span>
          </Typography>

          <Typography>
            Barangay:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchScholarProfile?.barangay.toLowerCase()}
            </span>
          </Typography>

          <Typography>
            District:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {fetchScholarProfile?.district.toLowerCase()}
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

export default ScholarDetail;
