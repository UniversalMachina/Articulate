import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              {/* <li><Link to="/home">Home</Link></li> */}
              {/* <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li> */}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
