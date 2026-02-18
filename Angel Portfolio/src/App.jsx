import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Onepg from './pages/Onepg';


export default function App()
{  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Onepg />} />
        </Routes>
       
      </div>
    </Router>
  );
}

