import { createContext, useState } from 'react';
import connectAPI from '../../connection/connectAPI';
import { useEffect } from 'react';

const ListDetailContext = createContext();

// eslint-disable-next-line react/prop-types
export const ListDetailProvider = ({ children }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [officerUname, setOfficerUname] = useState('');
  const [scholarUname, setScholarUname] = useState('');
  const [fetchOfficerProfile, setOfficerProfile] = useState({});
  const [fetchScholarProfile, setScholarProfile] = useState({});

  useEffect(() => {
    connectAPI
      .get(`/accounts/users/staff/${officerUname}`)
      .then(res => setOfficerProfile(res.data))
      .catch(err =>
        console.error(
          `there is an error in fetching officer detail: ${err.message}`
        )
      );
  }, [officerUname]);

  useEffect(() => {
    connectAPI
      .get(`/accounts/users/scholars/${scholarUname}`)
      .then(res => setScholarProfile(res.data))
      .catch(err =>
        console.error(
          `there is an error in fetching scholar detail: ${err.message}`
        )
      );
  }, [scholarUname]);

  return (
    <ListDetailContext.Provider
      value={{
        openDialog,
        setOpenDialog,
        setOfficerUname,
        fetchOfficerProfile,
        setScholarUname,
        fetchScholarProfile,
      }}
    >
      {children}
    </ListDetailContext.Provider>
  );
};

export default ListDetailContext;
