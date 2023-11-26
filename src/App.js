import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MtkpPage from './page/MtkpPage';
import FiqihPage from './page/FiqihPage';
import BindoPage from './page/BindoPage';
import HomePage from './page/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mtkp" element={<MtkpPage />} />
        <Route path="/mtkw" />
        <Route path="/fiqih" element={<FiqihPage />} />
        <Route path="/bindo" element={<BindoPage />} />
        <Route path="/fisika" />
      </Routes>
    </Router>
  );
}

export default App;
