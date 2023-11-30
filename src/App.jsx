import { Routes, Route } from 'react-router-dom';
import Landing from './start/Landing';
import OfficerLogin from './Officer/login/OfficerLogin';
import HeadLogin from './Head/login/HeadLogin';
import PageNotFound from './PageNotFound';
import OfficerPrivateRoute from './context/OfficerPrivateRoute';
import HeadPrivateRoute from './context/HeadPrivateRoute';
import HeadBase from './Head/base/HeadBase';

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
        {/* <Route element={<HeadPrivateRoute />}>
          <Route path="/head-officer/" element={<TestHead />} />
        </Route> */}

        {/* For testing pruposes */}
        <Route path="/test" element={<HeadBase />} />

        {/* Page Not Found landing */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
