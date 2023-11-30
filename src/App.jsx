import { Routes, Route } from 'react-router-dom';
import Landing from './start/Landing';
import OfficerLogin from './Officer/login/OfficerLogin';
import HeadLogin from './Head/login/HeadLogin';
import PageNotFound from './PageNotFound';
// import OfficerPrivateRoute from './context/OfficerPrivateRoute';
import HeadPrivateRoute from './context/HeadPrivateRoute';
import HeadBase from './Head/base/HeadBase';
import HeadDashboard from './Head/pages/HeadDashboard';
import ManageUsers from './Head/pages/ManageUsers';
import ApplicantTable from './Head/pages/tables/ApplicantTable';
import AuditTable from './Head/pages/tables/AuditTable';
import ConfigScholar from './Head/pages/ConfigScholar';
import ForecastingChart from './Head/pages/charts/ForecastingChart';
import AreaBumpChart from './Head/pages/charts/AreaBumpChart';
import DoughnutChart from './Head/pages/charts/DoughnutChart';
import PieChart from './Head/pages/charts/PieChart';
import HeadHeatmap from './Head/pages/charts/HeadHeatmap';

function App() {
  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Scholar officer routing */}
        <Route path="/scholar-officer/login" element={<OfficerLogin />} />
        {/* Scholar officer private route */}
        {/* <Route element={<OfficerPrivateRoute />}>
          <Route path="/scholar-officer/" element={<Test />} />
        </Route> */}

        {/* Head scholarship officer routing */}
        <Route path="/head-officer/login" element={<HeadLogin />} />
        {/* Head officer private route */}
        <Route element={<HeadPrivateRoute />}>
          <Route path="/head-officer/" element={<HeadBase />}>
            <Route path="/head-officer/" element={<HeadDashboard />} />
            <Route path="/head-officer/users/" element={<ManageUsers />} />
            <Route
              path="/head-officer/applicant-table/"
              element={<ApplicantTable />}
            />
            <Route path="/head-officer/audit-table/" element={<AuditTable />} />
            <Route path="/head-officer/config/" element={<ConfigScholar />} />
            <Route
              path="/head-officer/line-chart/"
              element={<ForecastingChart />}
            />
            <Route
              path="/head-officer/area-bump/"
              element={<AreaBumpChart />}
            />
            <Route
              path="/head-officer/doughnut-chart/"
              element={<DoughnutChart />}
            />
            <Route path="/head-officer/pie-chart/" element={<PieChart />} />
            <Route path="/head-officer/heatmap/" element={<HeadHeatmap />} />
          </Route>
        </Route>

        {/* For testing pruposes */}
        {/* <Route path="/test" element={<HeadBase />} /> */}

        {/* Page Not Found landing */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
