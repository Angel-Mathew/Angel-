import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';
import Onepg from './pages/Onepg';



export default function App()
{  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Onepg />} />
        </Routes>
       <Footer />
      </div>

    </Router>
  );
}

