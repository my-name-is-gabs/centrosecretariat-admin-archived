import { Routes, Route } from 'react-router-dom';
import Landing from './start/Landing';
import OfficerLogin from './officer/login/OfficerLogin';
import HeadLogin from './head/login/HeadLogin';
import PageNotFound from './PageNotFound';
import OfficerPrivateRoute from './context/OfficerPrivateRoute';
import HeadPrivateRoute from './context/HeadPrivateRoute';
import HeadBase from './head/base/HeadBase';
import HeadDashboard from './head/pages/HeadDashboard';
import ManageScholarOfficer from './head/pages/accounts/ManageScholarOfficer';
import ApplicantTable from './head/pages/tables/ApplicantTable';
import AuditTable from './head/pages/tables/AuditTable';
import ConfigScholar from './head/pages/ConfigScholar';
import ForecastingChart from './head/pages/charts/ForecastingChart';
import DoughnutChart from './head/pages/charts/DoughnutChart';
import PieChart from './head/pages/charts/PieChart';
import LineChart from './head/pages/charts/LineChart';
import ScholarAccountList from './head/pages/accounts/ScholarAccountList';
import OfficerBase from './officer/base/OfficerBase';
import Home from './officer/Home/Home';
import SettingsPage from './officer/Pages/SettingPage';
import ForgotPassword from './ForgotPassword';
import Profile from './head/pages/Profile';

function App() {
  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Scholar officer routing */}
        <Route path="/scholar-officer/login" element={<OfficerLogin />} />
        {/* Scholar officer private route */}
        <Route element={<OfficerPrivateRoute />}>
          <Route path="/scholar-officer/" element={<OfficerBase />}>
            <Route path="/scholar-officer/" element={<Home />} />
            <Route
              path="/scholar-officer/profile/"
              element={<SettingsPage />}
            />
          </Route>
        </Route>

        {/* Head scholarship officer routing */}
        <Route path="/head-officer/login" element={<HeadLogin />} />
        {/* Head officer private route */}
        <Route element={<HeadPrivateRoute />}>
          <Route path="/head-officer/" element={<HeadBase />}>
            <Route path="/head-officer/" element={<HeadDashboard />} />
            <Route
              path="/head-officer/scholar-officer-accounts/"
              element={<ManageScholarOfficer />}
            />
            <Route
              path="/head-officer/scholar-account-list/"
              element={<ScholarAccountList />}
            />
            <Route
              path="/head-officer/applicant-table/"
              element={<ApplicantTable />}
            />
            <Route path="/head-officer/audit-table/" element={<AuditTable />} />
            <Route path="/head-officer/config/" element={<ConfigScholar />} />
            <Route
              path="/head-officer/forecast-result/"
              element={<ForecastingChart />}
            />

            <Route path="/head-officer/line-chart/" element={<LineChart />} />
            <Route
              path="/head-officer/doughnut-chart/"
              element={<DoughnutChart />}
            />
            <Route path="/head-officer/pie-chart/" element={<PieChart />} />
            <Route path="/head-officer/profile/" element={<Profile />} />
          </Route>
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* For testing pruposes */}
        {/* <Route path="/test" element={<HeadBase />} /> */}

        {/* Page Not Found landing */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
