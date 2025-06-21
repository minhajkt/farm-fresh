import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import LanguageSelection from './pages/LanguageSelection';
import RoleSelection from './pages/RoleSelection';
import FarmDetails from './pages/FarmDetails';
import UserDetails from './pages/UserDetails';
import OTPVerification from './pages/OTPVerifcation';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/language" element={<LanguageSelection />} />
          <Route path="/role" element={<RoleSelection />} />
          <Route path="/farm" element={<FarmDetails />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/otp" element={<OTPVerification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App