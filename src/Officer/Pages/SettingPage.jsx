import { useEffect } from 'react';
import ChangePassModal from '../Components/ChangePassModal';
import ProfileModal from '../Components/ProfileModal';
import connectAPI from '../../connection/connectAPI';
import { useState } from 'react';
import { toast } from 'react-toastify';

const SettingsPage = () => {
  const [profileDetail, setProfileDetail] = useState({});
  const [parseDate, setDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await connectAPI.get('/accounts/profile');
        setProfileDetail(() => res.data);
        setDate(
          new Intl.DateTimeFormat('en-ph', { dateStyle: 'long' }).format(
            new Date(res.data.birthdate)
          )
        );
      } catch (error) {
        toast.error('There is an error fetching data');
      }
    };
    fetchData();
  }, []);

  const handleUpdateInfo = async e => {
    e.preventDefault();
    try {
      const res = await connectAPI.patch(
        '/accounts/profile/',
        JSON.stringify(profileDetail)
      );
      console.log(res);
      if (res.status === 200) {
        toast.success('Update personal info successfull');
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <>
      <div className="card cs-bg-secondary-rounded shadow w-75 mx-auto mb-5">
        <div className="card-header bg-secondary bg-gradient">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="d-inline-flex gap-3 align-items-center">
              <i className="fa-solid fa-user-large fs-3"></i>
              <div className="fs-5 text-white fw-semibold">Profile</div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="firstname" className="form-label fw-bold">
                First name:
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="form-control bg-light-subtle"
                value={profileDetail.firstname}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="middlename" className="form-label fw-bold">
                Middle name:
              </label>
              <input
                type="text"
                name="middlename"
                id="middlename"
                className="form-control bg-light-subtle"
                value={profileDetail.middlename}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="lastname" className="form-label fw-bold">
                Last name:
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="form-control bg-light-subtle"
                value={profileDetail.lastname}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-4">
              <label htmlFor="birthdate" className="form-label fw-bold">
                Birthdate:
              </label>
              <input
                type="text"
                name="birthdate"
                id="birthdate"
                className="form-control bg-light-subtle"
                value={parseDate}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="age" className="form-label fw-bold">
                Age:
              </label>
              <input
                type="text"
                name="age"
                id="age"
                className="form-control bg-light-subtle"
                value={profileDetail.age}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="gender" className="form-label fw-bold">
                Gender:
              </label>
              <input
                type="text"
                name="gender"
                id="gender"
                className="form-control bg-light-subtle"
                value={profileDetail.gender === 1 ? 'Male' : 'Female'}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-8">
              <label htmlFor="address" className="form-label fw-bold">
                ADDRESS (House No./Street):{' '}
              </label>
              <input
                type="text"
                name="house_address"
                id="address"
                className="form-control bg-light-subtle"
                value={profileDetail.house_address}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="barangay" className="form-label fw-bold">
                BARANGAY:
              </label>
              <input
                type="text"
                name="barangay"
                id="barangay"
                className="form-control bg-light-subtle"
                value={profileDetail.barangay}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-end align-items-center gap-2">
            <div
              className="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#profileModal"
            >
              Edit
            </div>
            <div
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#changePasswordModal"
            >
              Change password
            </div>
          </div>
        </div>
      </div>

      {/* Change password modal */}
      <ChangePassModal />

      {/* Update user info Modal */}
      <ProfileModal
        defaultValue={profileDetail}
        setProfileDetail={setProfileDetail}
        handleUpdateInfo={handleUpdateInfo}
      />
    </>
  );
};

export default SettingsPage;
