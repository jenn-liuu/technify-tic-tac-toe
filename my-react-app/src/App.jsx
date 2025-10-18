import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from './components/Home'; 
import Board from './components/Board'; 

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