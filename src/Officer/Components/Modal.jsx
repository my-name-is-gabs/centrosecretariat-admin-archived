import { useEffect } from 'react';
import connectAPI from '../../connection/connectAPI';
import { useState } from 'react';
import { courseTakingOptions } from '../helper/selectionData';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const Modal = ({ applicant_id, setLoading }) => {
  const [fetchListData, setListData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchingData = async () => {
      setLoading(true);
      try {
        const res = await connectAPI.get(`/applications/list/${applicant_id}`);
        if (res.status === 200) {
          setListData(res.data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        if (error.response.status === 401) {
          alert('Session has expired');
          navigate('/');
        }
      }
    };
    fetchingData();
  }, [applicant_id, navigate, setLoading]);

  const acceptApplication = async () => {
    try {
      setLoading(true);
      await connectAPI.patch(
        `/applications/list/${applicant_id}/`,
        JSON.stringify({
          application_status: 'ACCEPTED',
        })
      );
      setLoading(false);
      alert('Applicant accepted');
      return window.location.reload();
    } catch (error) {
      setLoading(false);
      if (error.response.status === 400) {
        toast.error('Something went wrong in sending the data.');
      }
      if (error.response.status === 401) {
        alert('Session has expired');
        navigate('/');
      }
    }
  };

  const rejectApplication = async () => {
    try {
      setLoading(true);
      await connectAPI.patch(
        `/applications/list/${applicant_id}/`,
        JSON.stringify({
          application_status: 'REJECTED',
        })
      );
      setLoading(false);
      alert('Applicant rejected');
      return window.location.reload();
    } catch (error) {
      setLoading(true);
      if (error.response.status === 400) {
        toast.error('Something went wrong in sending the data.');
      }
      if (error.response.status === 401) {
        alert('Session has expired');
        navigate('/');
      }
    }
  };

  return (
    <>
      {/* Main Modal */}
      <div
        className="modal fade"
        id="scholarListModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="scholarListModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-primary bg-gradient">
              <h1
                className="modal-title fw-bold text-white fs-5"
                id="scholarListModalLabel"
              >
                {"Applicant's"} Detail
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row w-75 mx-auto">
                {/* PERSONAL INFORMATION */}
                <div className="card mb-5">
                  <div className="card-header">
                    <div className="container d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <div className="fs-5 fw-semibold">
                          PERSONAL INFORMATION
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <label
                          htmlFor="applying_for_academic_year"
                          className="form-label fw-bold"
                        >
                          APPLYING FOR ACADEMIC YEAR:{' '}
                        </label>

                        <input
                          name="applying_for_academic_year"
                          id="applying_for_academic_year"
                          className="form-control fw-bold text-danger"
                          value={fetchListData.applying_for_academic_year}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="applicant_status"
                          className="form-label fw-bold"
                        >
                          APPLICANT STATUS:{' '}
                          <span className="text-danger">*</span>
                        </label>

                        <input
                          name="applicant_status"
                          id="applicant_status"
                          className="form-control fw-bold text-danger"
                          value={fetchListData.applicant_status}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="scholarship_type"
                          className="form-label fw-bold"
                        >
                          SCHOLARSHIP TYPE:{' '}
                          <span className="text-danger">*</span>
                        </label>

                        <input
                          name="scholarship_type"
                          id="scholarship_type"
                          className="form-control fw-bold text-danger"
                          value={fetchListData.scholarship_type}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-4">
                        <label htmlFor="gender" className="form-label fw-bold">
                          GENDER: <span className="text-danger">*</span>
                        </label>

                        <input
                          name="gender"
                          id="gender"
                          className="form-control"
                          value={fetchListData.gender == 1 ? 'Male' : 'Female'}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="birthdate"
                          className="form-label fw-bold"
                        >
                          DATE OF BIRTH: <span className="text-danger">*</span>
                        </label>
                        <input
                          type="date"
                          name="birthdate"
                          id="birthdate"
                          className="form-control"
                          value={fetchListData.birthdate}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label htmlFor="email" className="form-label fw-bold">
                          EMAIL: <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          name="email_address"
                          id="email"
                          className="form-control"
                          value={fetchListData.email_address}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-12">
                        <label htmlFor="address" className="form-label fw-bold">
                          ADDRESS (House No./Street):{' '}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="house_address"
                          id="address"
                          className="form-control"
                          value={fetchListData.house_address}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-6">
                        <label
                          htmlFor="barangay"
                          className="form-label fw-bold"
                        >
                          BARANGAY: <span className="text-danger">*</span>
                        </label>

                        <input
                          name="barangay"
                          id="barangay"
                          className="form-control"
                          value={fetchListData.barangay}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-6">
                        <label
                          htmlFor="barangay"
                          className="form-label fw-bold"
                        >
                          RELIGION: <span className="text-danger">*</span>
                        </label>

                        <input
                          name="religion"
                          id="religion"
                          className="form-control"
                          value={fetchListData.religion}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="fb_link" className="form-label fw-bold">
                          FB LINK: <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="personalized_facebook_link"
                          id="fb_link"
                          className="form-control"
                          value={fetchListData.personalized_facebook_link}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* EDUCATIONAL BACKGROUND */}
                {/* <!-- First Row --> */}
                <div className="card mb-5">
                  <div className="card-header">
                    <div className="container d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <div className="fs-5 fw-semibold">
                          CURRENT EDUCATION
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <label
                          htmlFor="university_attending"
                          className="form-label fw-bold"
                        >
                          UNIVERSITY ATTENDING:
                        </label>
                        <input
                          name="university_attending"
                          id="university_attending"
                          className="form-control"
                          readOnly
                          value={fetchListData.university_attending}
                        />
                      </div>

                      <div className="col-md-6">
                        <label
                          htmlFor="course_taking"
                          className="form-label fw-bold"
                        >
                          COURSE TAKING:
                        </label>
                        <input
                          name="course_taking"
                          id="course_taking"
                          className="form-control"
                          readOnly
                          value={
                            courseTakingOptions[fetchListData.course_taking]
                          }
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-4">
                        <label
                          htmlFor="year_level"
                          className="form-label fw-bold"
                        >
                          YEAR LEVEL:
                        </label>
                        <input
                          name="year_level"
                          id="year_level"
                          className="form-control"
                          readOnly
                          value={fetchListData.year_level}
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="is_graduating"
                          className="form-label fw-bold"
                        >
                          IS GRADUATING:
                        </label>
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          name="is_graduating"
                          id="is_graduating"
                          value={fetchListData.is_graduating ? 'Yes' : 'No'}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="course_duration"
                          className="form-label fw-bold"
                        >
                          COURSE DURATION:
                        </label>
                        <input
                          name="course_duration"
                          id="course_duration"
                          className="form-control"
                          readOnly
                          value={fetchListData.course_duration}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Second Row --> */}
                <div className="card mb-5">
                  <div className="card-header">
                    <div className="container d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <div className="fs-5 fw-semibold">
                          ELEMENTARY SCHOOL
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <label
                          htmlFor="elementary_school"
                          className="form-label fw-bold"
                        >
                          SCHOOL NAME:
                        </label>
                        <input
                          type="text"
                          name="elementary_school"
                          id="elementary_school"
                          className="form-control"
                          value={fetchListData.elementary_school}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="elementary_school_type"
                          className="form-label fw-bold"
                        >
                          SCHOOL TYPE:
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="elementary_school_type"
                          id="elementary_school_type_private"
                          value={fetchListData.elementary_school_type}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-8">
                        <label
                          htmlFor="elementary_school_address"
                          className="form-label fw-bold"
                        >
                          SCHOOL ADDRESS:
                        </label>
                        <input
                          type="text"
                          name="elementary_school_address"
                          id="elementary_school_address"
                          className="form-control"
                          value={fetchListData.elementary_school_address}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="elementary_start_end"
                          className="form-label fw-bold"
                        >
                          S.Y. GRADUATED (START-END):{' '}
                        </label>
                        <input
                          type="text"
                          name="elementary_start_end"
                          id="elementary_start_end"
                          className="form-control"
                          value={fetchListData.elementary_start_end}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Third Row --> */}
                <div className="card mb-5">
                  <div className="card-header">
                    <div className="container d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <div className="fs-5 fw-semibold">
                          JUNIOR HIGH SCHOOL
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <label
                          htmlFor="jhs_school"
                          className="form-label fw-bold"
                        >
                          SCHOOL NAME:
                        </label>
                        <input
                          type="text"
                          name="jhs_school"
                          id="jhs_school"
                          className="form-control"
                          value={fetchListData.jhs_school}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="jhs_school_type"
                          className="form-label fw-bold"
                        >
                          SCHOOL TYPE:
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="jhs_school_type"
                          id="jhs_school_type_private"
                          value={fetchListData.jhs_school_type}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-8">
                        <label
                          htmlFor="jhs_school_address"
                          className="form-label fw-bold"
                        >
                          SCHOOL ADDRESS:
                        </label>
                        <input
                          type="text"
                          name="jhs_school_address"
                          id="jhs_school_address"
                          className="form-control"
                          value={fetchListData.jhs_school_address}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="jhs_start_end"
                          className="form-label fw-bold"
                        >
                          S.Y. GRADUATED (START-END):{' '}
                        </label>
                        <input
                          type="text"
                          name="jhs_start_end"
                          id="jhs_start_end"
                          className="form-control"
                          value={fetchListData.jhs_start_end}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Fourth Row --> */}
                <div className="card mb-5">
                  <div className="card-header">
                    <div className="container d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <div className="fs-5 fw-semibold">
                          SENIOR HIGH SCHOOL
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <label
                          htmlFor="shs_school"
                          className="form-label fw-bold"
                        >
                          SCHOOL NAME:
                        </label>
                        <input
                          type="text"
                          name="shs_school"
                          id="shs_school"
                          className="form-control"
                          value={fetchListData.shs_school}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="shs_school_type"
                          className="form-label fw-bold"
                        >
                          SCHOOL TYPE:
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="shs_school_type"
                          id="shs_school_type_private"
                          value={fetchListData.shs_school_type}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-8">
                        <label
                          htmlFor="shs_school_address"
                          className="form-label fw-bold"
                        >
                          SCHOOL ADDRESS:
                        </label>
                        <input
                          type="text"
                          name="shs_school_address"
                          id="shs_school_address"
                          className="form-control"
                          value={fetchListData.shs_school_address}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="shs_start_end"
                          className="form-label fw-bold"
                        >
                          S.Y. GRADUATED (START-END):{' '}
                        </label>
                        <input
                          type="text"
                          name="shs_start_end"
                          id="shs_start_end"
                          className="form-control"
                          value={fetchListData.shs_start_end}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* GUARDIAN SECTION */}
                <div className="card mb-5">
                  <div className="card-header">
                    <div className="container d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <div className="fs-5 fw-semibold">
                          {"GUARDIAN'S"} BACKGROUND INFORMATION
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <label
                          htmlFor="guardian_complete_name"
                          className="form-label fw-bold"
                        >
                          FULL NAME:
                        </label>
                        <input
                          type="text"
                          name="guardian_complete_name"
                          id="guardian_complete_name"
                          className="form-control"
                          value={fetchListData.guardian_complete_name}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-12">
                        <label
                          htmlFor="guardian_complete_address"
                          className="form-label fw-bold"
                        >
                          COMPLETE ADDRESS:
                        </label>
                        <input
                          type="text"
                          name="guardian_complete_address"
                          id="guardian_complete_address"
                          className="form-control"
                          value={fetchListData.guardian_complete_address}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-4">
                        <label
                          htmlFor="guardian_contact_number"
                          className="form-label fw-bold"
                        >
                          CONTACT NUMBER:
                        </label>

                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            +63
                          </span>

                          <input
                            type="tel"
                            name="guardian_contact_number"
                            id="guardian_contact_number"
                            className="form-control"
                            value={fetchListData.guardian_contact_number}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="guardian_occupation"
                          className="form-label fw-bold"
                        >
                          OCCUPATION:
                        </label>
                        <input
                          type="text"
                          name="guardian_occupation"
                          id="guardian_occupation"
                          className="form-control"
                          value={fetchListData.guardian_occupation}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="guardian_place_of_work"
                          className="form-label fw-bold"
                        >
                          PLACE OF WORK:
                        </label>
                        <input
                          type="text"
                          name="guardian_place_of_work"
                          id="guardian_place_of_work"
                          className="form-control"
                          value={fetchListData.guardian_place_of_work}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-12">
                        <label
                          htmlFor="guardian_educational_attainment"
                          className="form-label fw-bold"
                        >
                          EDUCATIONAL ATTAINMENT:
                        </label>
                        <input
                          type="text"
                          name="guardian_educational_attainment"
                          id="guardian_educational_attainment"
                          className="form-control"
                          value={fetchListData.guardian_educational_attainment}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* MISC SECTION */}
                {/* <!-- FIRST ROW --> */}
                <div className="card mb-5">
                  <div className="card-header">
                    <div className="container d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <div className="fs-5 fw-semibold">
                          MISCELLANEOUS INFORMATION
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <label
                          htmlFor="semester"
                          className="form-label fw-bold"
                        >
                          SEMESTER:
                        </label>
                        <input
                          name="semester"
                          id="semester"
                          className="form-control"
                          value={fetchListData.semester}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label fw-bold">
                          APPLYING FOR MERIT:
                        </label>
                        <input
                          type="text"
                          name="is_applying_for_merit"
                          id="is_applying_for_merit"
                          className="form-control"
                          value={
                            fetchListData.is_applying_for_merit ? 'Yes' : 'No'
                          }
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-4">
                        <label
                          htmlFor="total_units_enrolled"
                          className="form-label fw-bold"
                        >
                          TOTAL UNITS ENROLLED:
                        </label>

                        <input
                          type="number"
                          name="total_units_enrolled"
                          id="total_units_enrolled"
                          className="form-control"
                          readOnly
                          value={fetchListData.total_units_enrolled}
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="is_ladderized"
                          className="form-label fw-bold"
                        >
                          LADDERIZED:
                        </label>
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          name="is_ladderized"
                          id="is_ladderized_yes"
                          value={fetchListData.is_ladderized ? 'Yes' : 'No'}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="number_of_semesters_before_graduating"
                          className="form-label fw-bold"
                        >
                          NO. OF SEMESERS REMAINING:{' '}
                        </label>
                        <input
                          type="number"
                          name="number_of_semesters_before_graduating"
                          id="number_of_semesters_before_graduating"
                          className="form-control"
                          value={
                            fetchListData.number_of_semesters_before_graduating
                          }
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-4">
                        <label
                          htmlFor="transferee"
                          className="form-label fw-bold"
                        >
                          TRANSFEREE: (if not put N/A)
                        </label>
                        <input
                          type="text"
                          name="transferee"
                          id="transferee"
                          className="form-control"
                          value={fetchListData.transferee}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label htmlFor="shiftee" className="form-label fw-bold">
                          SHIFTEE: (if not put N/A)
                        </label>
                        <input
                          type="text"
                          name="shiftee"
                          id="shiftee"
                          className="form-control"
                          value={fetchListData.shiftee}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="student_status"
                          className="form-label fw-bold"
                        >
                          STUDENT STATUS:
                        </label>
                        <input
                          name="student_status"
                          id="student_status"
                          className="form-control"
                          value={fetchListData.student_status}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* NATIONAL ID INFO*/}
                <div className="card mb-5">
                  <div className="card-header">
                    <div className="container d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <div className="fs-5 fw-semibold">NATIONAL ID INFO</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <label
                          htmlFor="national_id"
                          className="form-label fw-bold"
                        >
                          National ID:
                        </label>
                        <img
                          src={fetchListData.national_id}
                          alt="National ID"
                          className="img-fluid"
                          width={550}
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-4">
                        <label
                          htmlFor="firstname"
                          className="form-label fw-bold"
                        >
                          FIRST NAME:
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          className="form-control"
                          value={fetchListData.firstname}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="middlename"
                          className="form-label fw-bold"
                        >
                          MIDDLE NAME:
                        </label>
                        <input
                          type="text"
                          name="middlename"
                          id="middlename"
                          className="form-control"
                          value={fetchListData.middlename}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="lastname"
                          className="form-label fw-bold"
                        >
                          LAST NAME:
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          className="form-control"
                          value={fetchListData.lastname}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* VOTER CERT INFO */}
                <div className="card mb-5">
                  <div className="card-header">
                    <div className="container d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <div className="fs-5 fw-semibold">
                          APPLICANT VOTER CERTIFICATE INFO
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-* mt-3">
                        <label
                          htmlFor="voter_cert"
                          className="form-label fw-bold me-2"
                        >
                          APPLICANT VOTER CERTIFICATE:
                        </label>
                        <img
                          src={fetchListData.voter_certificate}
                          alt="voter cert"
                          className="img-fluid"
                          width={550}
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-4">
                        <label
                          htmlFor="firstname"
                          className="form-label fw-bold"
                        >
                          VOTER ISSUANCE DATE:
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          className="form-control"
                          value={fetchListData.voters_issuance_date}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="middlename"
                          className="form-label fw-bold"
                        >
                          YEARS OF RESIDENCY:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={fetchListData.years_of_residency}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-12">
                        <label
                          htmlFor="voters_issued_at"
                          className="form-label fw-bold"
                        >
                          ADDRESS:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={fetchListData.voters_issued_at}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* GUARDIAN VOTER CERT INFO */}
                <div className="card mb-5">
                  <div className="card-header">
                    <div className="container d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <div className="fs-5 fw-semibold">
                          GUARDIAN VOTER CERTIFICATE INFO
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-* mt-5 mb-3">
                        <label
                          htmlFor="voter_cert"
                          className="form-label fw-bold me-2"
                        >
                          GUARDIAN VOTER CERTIFICATE:
                        </label>
                        <img
                          src={fetchListData.guardians_voter_certificate}
                          alt="guardian voter cert"
                          className="img-fluid"
                          width={550}
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-4">
                        <label
                          htmlFor="firstname"
                          className="form-label fw-bold"
                        >
                          VOTER ISSUANCE DATE:
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          className="form-control"
                          value={fetchListData.guardians_voters_issuance_date}
                          readOnly
                        />
                      </div>

                      <div className="col-md-4">
                        <label
                          htmlFor="middlename"
                          className="form-label fw-bold"
                        >
                          YEARS OF RESIDENCY:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={fetchListData.guardians_years_of_residency}
                          readOnly
                        />
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-12">
                        <label
                          htmlFor="voters_issued_at"
                          className="form-label fw-bold"
                        >
                          ADDRESS:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={fetchListData.guardians_voters_issued_at}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* GUARDIAN VOTER CERT INFO */}
                <div className="card mb-5">
                  <div className="card-header">
                    <div className="container d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <div className="fs-5 fw-semibold">PDF FILES</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-*">
                        <label
                          htmlFor="voter_cert"
                          className="form-label fw-bold me-2"
                        >
                          INFORMATIVE COPY OF GRADES:
                        </label>
                        <a
                          href={fetchListData.informative_copy_of_grades}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View File
                        </a>
                      </div>

                      <hr className="my-2 invisible" />

                      <div className="col-md-*">
                        <label
                          htmlFor="voter_cert"
                          className="form-label fw-bold me-2"
                        >
                          REGISTRATION FORM:
                        </label>
                        <a
                          href={fetchListData.registration_form}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View File
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-target="#rejectConfirmationModal"
                data-bs-toggle="modal"
              >
                Reject
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-target="#acceptConfirmationModal"
                data-bs-toggle="modal"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accept Confirmation Modal */}
      <div
        className="modal fade"
        id="acceptConfirmationModal"
        aria-hidden="true"
        aria-labelledby="acceptConfirmationModalLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="acceptConfirmationModalLabel"
              >
                Accept {applicant_id}?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Accept the scholar applicant</div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                data-bs-target="#scholarListModal"
                data-bs-toggle="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => acceptApplication()}
                data-bs-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* reject Confirmation Modal */}
      <div
        className="modal fade"
        id="rejectConfirmationModal"
        aria-hidden="true"
        aria-labelledby="rejectConfirmationModalLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="rejectConfirmationModalLabel"
              >
                Reject {applicant_id}?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Reject scholar applicant?</div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                data-bs-target="#scholarListModal"
                data-bs-toggle="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => rejectApplication()}
                data-bs-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
