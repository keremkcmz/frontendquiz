import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Sinav from './Sinav'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/sinav" element={<Sinav />} />
      </Routes>
    </Router>
  );
}

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="hood">
          <h1 className='welcome'>Welcome to the</h1>
          <h1 className='frontend'>Frontend Quiz!</h1>
          <p>Pick a subject to get started.</p>
        </div>
        <div className="testselection">
          <button><img src="src/assets/img/Group 83 (1).svg" alt="" />HTML</button>
          <button><img src="src/assets/img/Group 82.svg" alt="" />CSS</button>
          <button><img src="src/assets/img/Group 82 (1).svg" alt="" />JavaScript</button>
          <button onClick={() => window.location.href='/sinav'}>
            <img src="src/assets/img/Group 83 (1).svg" alt="" />Accessibility
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;