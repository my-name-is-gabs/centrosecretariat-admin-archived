import { createContext, useState } from 'react';
import connectAPI from '../../connection/connectAPI';
import { useEffect } from 'react';

const ListDetailContext = createContext();

// eslint-disable-next-line react/prop-types
export const ListDetailProvider = ({ children }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [usernameID, setUsernameID] = useState('');
  const [fetchListData, setListData] = useState({});

  useEffect(() => {
    connectAPI
      .get(`/accounts/users/staff/${usernameID}/`)
      .then(res => setListData(res.data))
      .catch(err =>
        console.error(
          `there is an error in fetching officer detail: ${err.message}`
        )
      );
  }, [usernameID]);

  return (
    <ListDetailContext.Provider
      value={{ openDialog, setOpenDialog, setUsernameID, fetchListData }}
    >
      {children}
    </ListDetailContext.Provider>
  );
};

export default ListDetailContext;
