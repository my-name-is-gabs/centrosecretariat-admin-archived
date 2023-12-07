import { PropTypes } from 'prop-types';

// eslint-disable-next-line react/prop-types
const ProfileModal = ({ defaultValue, setProfileDetail, handleUpdateInfo }) => {
  return (
    <div
      className="modal fade"
      id="profileModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="10"
      aria-labelledby="profileModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header bg-secondary bg-gradient">
            <h1
              className="modal-title text-white fw-bold fs-5"
              id="profileModalLabel"
            >
              Update Information
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="firstname" className="form-label fw-bold">
                  First name:
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="form-control"
                  value={defaultValue.firstname}
                  onChange={e =>
                    setProfileDetail({
                      ...defaultValue,
                      firstname: e.target.value,
                    })
                  }
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
                  className="form-control"
                  value={defaultValue.middlename}
                  onChange={e =>
                    setProfileDetail({
                      ...defaultValue,
                      middlename: e.target.value,
                    })
                  }
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
                  className="form-control"
                  value={defaultValue.lastname}
                  onChange={e =>
                    setProfileDetail({
                      ...defaultValue,
                      lastname: e.target.value,
                    })
                  }
                />
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-6">
                <label htmlFor="birthday" className="form-label fw-bold">
                  Birthday:
                </label>
                <input
                  type="date"
                  name="birthdate"
                  id="birthday"
                  className="form-control"
                  value={defaultValue.birthdate}
                  onChange={e =>
                    setProfileDetail({
                      ...defaultValue,
                      birthdate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="age" className="form-label fw-bold">
                  Age:
                </label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  className="form-control"
                  value={defaultValue.age}
                  onChange={e =>
                    setProfileDetail({
                      ...defaultValue,
                      age: e.target.value,
                    })
                  }
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
                  className="form-control"
                  value={defaultValue.house_address}
                  onChange={e =>
                    setProfileDetail({
                      ...defaultValue,
                      house_address: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="barangay" className="form-label fw-bold">
                  BARANGAY:
                </label>
                <select
                  name="barangay"
                  id="barangay"
                  className="form-select"
                  value={defaultValue.barangay}
                  onChange={e =>
                    setProfileDetail({
                      ...defaultValue,
                      barangay: e.target.value,
                    })
                  }
                >
                  <option selected defaultValue>
                    Select a Barangay...
                  </option>
                  {barangayOptions.map((brgy, i) => (
                    <>
                      <option key={i} value={brgy}>
                        {brgy}
                      </option>
                    </>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleUpdateInfo}
              className="btn btn-info"
              data-bs-dismiss="modal"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const barangayOptions = [
  'BAGUMBAYAN',
  'BAMBANG',
  'CALZADA',
  'HAGONOY',
  'IBAYO TIPAS',
  'LIGID TIPAS',
  'LOWER BICUTAN',
  'NEW LOWER BICUTAN',
  'NAPINDAN',
  'PALINGON',
  'SAN MIGUEL',
  'SANTA ANA',
  'TUKTUKAN',
  'USUSAN',
  'WAWA',
  'BAGONG TANYAG',
  'CENTRAL BICUTAN',
  'CENTRAL SIGNAL VILLAGE',
  'FORT BONIFACIO',
  'KATUPARAN',
  'MAHARLIKA VILLAGE',
  'NORTH DAANG HARI',
  'NORTH SIGNAL VILLAGE',
  'PINAGSAMA',
  'SOUTH DAANG HARI',
  'SOUTH SIGNAL VILLAGE',
  'UPPER BICUTAN',
  'WESTERN BICUTAN',
];

ProfileModal.propTypes = {
  defaultValue: PropTypes.object,
};

export default ProfileModal;
