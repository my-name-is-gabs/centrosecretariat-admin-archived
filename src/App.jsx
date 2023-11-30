import { Routes, Route } from 'react-router-dom';
import Landing from './start/Landing';
import OfficerLogin from './Officer/login/OfficerLogin';
import HeadLogin from './Head/login/HeadLogin';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/scholar-officer/login" element={<OfficerLogin />} />
        <Route path="/head-officer/login" element={<HeadLogin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
