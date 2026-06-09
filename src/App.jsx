import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppleDetail from './pages/AppleDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apple" element={<AppleDetail />} />
    </Routes>
  );
}

export default App;
