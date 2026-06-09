import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppleDetail from './pages/AppleDetail';
import Docs from './pages/Docs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apple" element={<AppleDetail />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  );
}

export default App;
