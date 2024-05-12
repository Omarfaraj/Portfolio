import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path to="/" exact element={<Home />} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
