import { Routes, Route } from 'react-router-dom';
import Landing from './start/Landing';
import OfficerLogin from './Officer/login/OfficerLogin';
import HeadLogin from './Head/login/HeadLogin';
import PageNotFound from './PageNotFound';
import OfficerPrivateRoute from './context/OfficerPrivateRoute';
import HeadPrivateRoute from './context/HeadPrivateRoute';
import Test from './Officer/Home/Test';
import TestHead from './Head/home/TestHead';

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
          <Route path="/scholar-officer/" element={<Test />} />
        </Route>

        {/* Head scholarship officer routing */}
        <Route path="/head-officer/login" element={<HeadLogin />} />
        {/* Head officer private route */}
        <Route element={<HeadPrivateRoute />}>
          <Route path="/head-officer/" element={<TestHead />} />
        </Route>

        {/* Page Not Found landing */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
