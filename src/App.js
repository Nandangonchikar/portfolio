import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="/Projects" element={<Projects />} /> 
            <Route path="/Experience" element={<Experience />} />  
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
