import { createContext, useState } from 'react';
import connectAPI from '../../connection/connectAPI';
import { useEffect } from 'react';

const ListDetailContext = createContext();

// eslint-disable-next-line react/prop-types
export const ListDetailProvider = ({ children }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [officerUname, setOfficerUname] = useState('');
  const [scholarUname, setScholarUname] = useState('');
  const [applicantUname, setApplicantUname] = useState('');
  const [fetchOfficerProfile, setOfficerProfile] = useState({});
  const [fetchScholarProfile, setScholarProfile] = useState({});
  const [fetchApplicantProfile, setApplicantProfile] = useState({});
  const [univName, setUnivName] = useState([]);
  const [courseName, setCourseName] = useState([]);

  useEffect(() => {
    connectAPI
      .get(`/accounts/users/staff/${officerUname}`)
      .then(res => setOfficerProfile(res.data.profile))
      .catch(err =>
        console.error(
          `there is an error in fetching officer detail: ${err.message}`
        )
      );
  }, [officerUname]);

  useEffect(() => {
    connectAPI
      .get(`/accounts/users/scholars/${scholarUname}`)
      .then(res => setScholarProfile(res.data.profile))
      .catch(err =>
        console.error(
          `there is an error in fetching scholar detail: ${err.message}`
        )
      );
  }, [scholarUname]);

  useEffect(() => {
    (async function () {
      try {
        const res = await connectAPI.get('/applications/univ');
        setUnivName(res.data);
      } catch (error) {
        console.error(
          `Somthing went wrong in fetching university names: ${error.message}`
        );
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      try {
        const res = await connectAPI.get('/applications/courses');
        setCourseName(res.data);
      } catch (error) {
        console.error(
          `Somthing went wrong in fetching university names: ${error.message}`
        );
      }
    })();
  }, []);

  useEffect(() => {
    connectAPI
      .get(`/applications/all/${applicantUname}`)
      .then(res => setApplicantProfile(res.data))
      .catch(err =>
        console.error(
          `there is an error in fetching scholar detail: ${err.message}`
        )
      );
  }, [applicantUname]);

  return (
    <ListDetailContext.Provider
      value={{
        openDialog,
        setOpenDialog,
        setOfficerUname,
        fetchOfficerProfile,
        setScholarUname,
        fetchScholarProfile,
        scholarUname,
        officerUname,
        setApplicantUname,
        fetchApplicantProfile,
        univName,
        courseName,
      }}
    >
      {children}
    </ListDetailContext.Provider>
  );
};

export default ListDetailContext;
