import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { AppPage } from './pages/HomePage';
import { Navbar } from './components/Navbar';

export const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<AppPage />} />
            </Routes>
        </Router>
    );
};