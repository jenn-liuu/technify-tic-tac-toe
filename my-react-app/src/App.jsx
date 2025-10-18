import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Board from './Board'; 

export default function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Board />} />
      </Routes>
    </Router>
  ); 
}