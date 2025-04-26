import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Home from './components/Home'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} /> 
    </Routes>
  );
}

export default App;
