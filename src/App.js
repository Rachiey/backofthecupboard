import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Pages from './pages';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route index element={<Pages.Home />} />
        <Route path="/pantry" element={<Pages.Pantry />} />
        <Route path="/pantrydetail" element={<Pages.PantryDetail />} />
        <Route path="/*" element={<Pages.NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;