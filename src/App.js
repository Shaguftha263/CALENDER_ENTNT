import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import User from './components/User';
import Reporting from './components/Reporting';
import Notification from './components/Notification';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Calendar App for ENTNT</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
