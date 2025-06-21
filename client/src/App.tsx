import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import LanguageSelection from './pages/LanguageSelection';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/language" element={<LanguageSelection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App