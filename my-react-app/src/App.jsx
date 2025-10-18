import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from './Home'; 
import Board from './Board'; 

export default function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Board />} />
      </Routes>
    </Router>
  ); 
}