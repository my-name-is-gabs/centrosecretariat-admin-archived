import { useEffect } from 'react';
import Modal from '../Components/Modal';
import connectAPI from '../../connection/connectAPI';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../../LoadingPage';

const Home = () => {
  const [fetchListData, setListData] = useState([]);
  const [getApplicantId, setApplicantId] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filteredList, setFilterList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const res = await connectAPI.get('/applications/list');
        setListData(res.data);
      } catch (error) {
        if (error.response.status === 401) {
          alert('Session has expired');
          navigate('/');
        }
      }
    };
    fetchingData();
  }, [navigate]);

  useEffect(() => {
    setFilterList(() => fetchListData);
  }, [fetchListData]);

  const filterData = useCallback(() => {
    const filteringList = fetchListData.filter(
      value => value.scholarship_type === filterCategory
    );
    setFilterList(filteringList);
  }, [filterCategory, fetchListData]);

  const clearFilteredList = useCallback(() => {
    setFilterCategory('');
    setFilterList(fetchListData);
  }, [fetchListData]);

  return (
    <>
      {isLoading && <LoadingPage />}
      <div className="d-flex align-items-center">
        <div className="col-md-3 me-4">
          <label htmlFor="type" className="form-label">
            Scholarship type filter
          </label>
          <select
            name="type"
            id="type"
            className="form-select"
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
          >
            <option selected="selected" defaultValue="" disabled>
              Select scholarship type
            </option>
            <option value="BASIC PLUS SUC">BASIC PLUS SUC</option>
            <option value="SUC_LCU">SUC/LCU</option>
            <option value="BASIC SCHOLARSHIP">BASIC SCHOLARSHIP</option>
            <option value="HONORS">HONORS</option>
            <option value="PRIORITY">PRIORITY</option>
            <option value="PREMIER">PREMIER</option>
          </select>
        </div>
        <button
          className="btn btn-primary align-self-end me-2"
          onClick={() => filterData()}
        >
          Filter
        </button>
        <button
          className="btn btn-secondary align-self-end"
          onClick={() => clearFilteredList()}
        >
          Clear
        </button>
      </div>

      <div className="card mt-4">
        <div className="card-header">
          <div className="container d-flex justify-content-between">
            <div className="d-inline-flex gap-2 align-items-center">
              <img src="/assets/icons/folder.png" alt="folder" />
              <h5 className="fw-bold">Applicant Records</h5>
            </div>
            <div className="d-inline-flex gap-5 justify-content-around align-items-center">
              <h6>
                Remaining: <strong>{fetchListData.length}</strong>
              </h6>
              {/* <h6>Current Page: 2</h6>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-hover w-100">
            <thead>
              <th scope="col">Applicant ID</th>
              <th scope="col">Full name</th>
              <th scope="col">Email</th>
              <th scope="col">Applying for Semester</th>
              <th scope="col">Scholarship Type</th>
              <th scope="col">Applicant Status</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </thead>
            <tbody>
              {/* <tr>
                <td>123</td>
                <td>John Doe</td>
                <td>jd@gmail.com</td>
                <td>second</td>
                <td>pending</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#scholarListModal"
                  >
                    View <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
              </tr> */}
              {filteredList.map((list, i) => (
                <tr key={i}>
                  <td>{list.application_reference_id}</td>
                  <td>{list.firstname}</td>
                  <td>{list.email_address}</td>
                  <td>{list.semester}</td>
                  <td>{list.scholarship_type}</td>
                  <td>{list.applicant_status}</td>
                  <td>pending</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        setApplicantId(list.application_reference_id)
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#scholarListModal"
                    >
                      View <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL FORM */}
      <Modal applicant_id={getApplicantId} setLoading={setLoading} />
    </>
  );
};

export default Home;
