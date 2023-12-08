import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import { useContext } from 'react';
import ListDetailContext from '../context/ListDetailContext.jsx';
import moment from 'moment';

const ApplicantDetail = () => {
  const {
    openDialog,
    setOpenDialog,
    fetchApplicantProfile,
    univName,
    courseName,
  } = useContext(ListDetailContext);

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
          Application Reference ID:{' '}
          <span style={{ fontWeight: 'bold' }}>
            {fetchApplicantProfile?.application_reference_id}
          </span>
        </Typography>
      </DialogTitle>

      <DialogContent dividers={true}>
        <DialogContentText
          id="scroll-dialog-description"
          tabIndex={1}
          color="neutral"
        >
          {/* Personal Detail Display */}
          <Stack marginY="30px" spacing={2}>
            <Typography
              variant="h5"
              fontWeight="bold"
              style={{
                width: '100%',
                borderBottom: '1px solid #333',
                paddingBottom: '5px',
                marginBottom: '8px',
              }}
            >
              Peronal Details
            </Typography>

            <TextField
              variant="standard"
              size="small"
              label="First name"
              value={fetchApplicantProfile?.firstname || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Middle name"
              value={fetchApplicantProfile?.middlename || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Last name"
              value={fetchApplicantProfile?.lastname || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Date of birth"
              value={moment(new Date(fetchApplicantProfile?.birthdate)).format(
                'LL'
              )}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Gender"
              value={
                fetchApplicantProfile?.gender === 1
                  ? 'Male'
                  : fetchApplicantProfile?.gender === 2
                  ? 'Female'
                  : ''
              }
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Email address"
              value={fetchApplicantProfile?.email_address || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Facebook link"
              value={fetchApplicantProfile?.personalized_facebook_link || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Religion"
              value={fetchApplicantProfile?.religion || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="House address"
              value={fetchApplicantProfile?.house_address || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Barangay"
              value={fetchApplicantProfile?.barangay || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="District"
              value={fetchApplicantProfile?.district || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Years of residency"
              value={fetchApplicantProfile?.years_of_residency || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Voter's ID issued at"
              value={fetchApplicantProfile?.voters_issued_at || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Voter's ID issuance date"
              value={fetchApplicantProfile?.voters_issuance_date || ' '}
              InputProps={{
                readOnly: true,
              }}
            />
          </Stack>
          {/* end */}

          {/* Educational Info */}
          <Stack marginY="30px" spacing={2}>
            <Typography
              variant="h5"
              fontWeight="bold"
              style={{
                width: '100%',
                borderBottom: '1px solid #333',
                paddingBottom: '5px',
                marginBottom: '8px',
              }}
            >
              Education Details
            </Typography>

            <TextField
              variant="standard"
              size="small"
              label="University attending"
              value={
                univName.find(
                  item => item.id == fetchApplicantProfile?.university_attending
                )?.university_name || ' '
              }
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Course taking"
              value={
                courseName.find(
                  item => item.id == fetchApplicantProfile?.course_taking || ' '
                )?.course_name
              }
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Year level"
              value={fetchApplicantProfile?.year_level || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Graduating"
              value={String(fetchApplicantProfile?.is_graduating) || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Course duration"
              value={fetchApplicantProfile?.course_duration || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <br />

            <TextField
              variant="standard"
              size="small"
              label="Elementary school"
              value={fetchApplicantProfile?.elementary_school || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Elementary school type"
              value={fetchApplicantProfile?.elementary_school_type || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Elementary school address"
              value={fetchApplicantProfile?.elementary_school_address || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Elementary duration (start-end)"
              value={fetchApplicantProfile?.elementary_start_end || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <br />

            <TextField
              variant="standard"
              size="small"
              label="Junior high school"
              value={fetchApplicantProfile?.jhs_school || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Junior high school type"
              value={fetchApplicantProfile?.jhs_school_type || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Junior high school address"
              value={fetchApplicantProfile?.jhs_school_address || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Junior high school duration (start-end)"
              value={fetchApplicantProfile?.jhs_start_end || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <br />

            <TextField
              variant="standard"
              size="small"
              label="Senior high school"
              value={fetchApplicantProfile?.shs_school || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Senior high school type"
              value={fetchApplicantProfile?.shs_school_type || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Senior high school address"
              value={fetchApplicantProfile?.shs_school_address || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Senior high school duration (start-end)"
              value={fetchApplicantProfile?.shs_start_end || ' '}
              InputProps={{
                readOnly: true,
              }}
            />
          </Stack>
          {/* End */}

          {/* Guardian Info */}
          <Stack marginY="30px" spacing={2}>
            <Typography
              variant="h5"
              fontWeight="bold"
              style={{
                width: '100%',
                borderBottom: '1px solid #333',
                paddingBottom: '5px',
                marginBottom: '8px',
              }}
            >
              Guardian Details
            </Typography>

            <TextField
              variant="standard"
              size="small"
              label="First name"
              value={fetchApplicantProfile?.guardian_complete_name || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Complete address"
              value={fetchApplicantProfile?.guardian_complete_address || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Contact number"
              value={fetchApplicantProfile?.guardian_contact_number || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Occupation"
              value={fetchApplicantProfile?.guardian_occupation || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Place of work"
              value={fetchApplicantProfile?.guardian_place_of_work || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Educational attainment"
              value={
                fetchApplicantProfile?.guardian_educational_attainment || ' '
              }
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Years of residency"
              value={fetchApplicantProfile?.guardians_years_of_residency || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Voter's ID issued at"
              value={fetchApplicantProfile?.guardians_voters_issued_at || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Voter's ID issuance date"
              value={
                fetchApplicantProfile?.guardians_voters_issuance_date || ' '
              }
              InputProps={{
                readOnly: true,
              }}
            />
          </Stack>

          {/* Scholastic Info */}
          <Stack marginY="30px" spacing={2}>
            <Typography
              variant="h5"
              fontWeight="bold"
              style={{
                width: '100%',
                borderBottom: '1px solid #333',
                paddingBottom: '5px',
                marginBottom: '8px',
              }}
            >
              Scholastic Information
            </Typography>

            <TextField
              variant="standard"
              size="small"
              label="Applicant status"
              value={fetchApplicantProfile?.applicant_status || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Scholarship type"
              value={fetchApplicantProfile?.scholarship_type || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Academic year"
              value={fetchApplicantProfile?.applying_for_academic_year || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Semester"
              value={fetchApplicantProfile?.semester || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Applying for merit"
              value={
                String(fetchApplicantProfile?.is_applying_for_merit) || ' '
              }
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Total units enrolled"
              value={fetchApplicantProfile?.total_units_enrolled || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Ladderized"
              value={String(fetchApplicantProfile?.is_ladderized) || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Transferee"
              value={fetchApplicantProfile?.transferee || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Shiftee"
              value={fetchApplicantProfile?.shiftee || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Student status"
              value={fetchApplicantProfile?.student_status || ' '}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              variant="standard"
              size="small"
              label="Eligible"
              value={fetchApplicantProfile?.is_eligible || ' '}
              InputProps={{
                readOnly: true,
              }}
            />
          </Stack>

          {/* Files */}
          <Stack marginY="30px" spacing={2}>
            <Typography
              variant="h5"
              fontWeight="bold"
              style={{
                width: '100%',
                borderBottom: '1px solid #333',
                paddingBottom: '5px',
                marginBottom: '8px',
              }}
            >
              Miscellaneous Files
            </Typography>

            <h4>National ID</h4>
            <img src={fetchApplicantProfile?.national_id} alt="National ID" />

            <br />
            <h4>{"Voter's"} Certificate</h4>
            <img
              src={fetchApplicantProfile?.voter_certificate}
              alt="Voter's Certificate"
            />

            <br />

            <h4>{"Guardian's"} Voter Certificate</h4>
            <img
              src={fetchApplicantProfile?.guardians_voter_certificate}
              alt="Guardian Voter Certificate"
            />

            <br />
            <a
              href={fetchApplicantProfile?.informative_copy_of_grades}
              target="_blank"
              rel="noreferrer"
            >
              informative copy of grades
            </a>
            <a
              href={fetchApplicantProfile?.registration_form}
              target="_blank"
              rel="noreferrer"
            >
              registration form
            </a>
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setOpenDialog(false)}
          variant="contained"
          color="danger"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplicantDetail;
