
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Admin from './components/Admin';
import User from './components/User';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/user" element={<User />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);
