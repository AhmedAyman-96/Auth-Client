import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    My App
                </Link>
                <div>
                    {isAuthenticated ? (
                        <button
                            onClick={logout}
                            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                        >
                            Logout
                        </button>
                    ) : (
                        <div className="space-x-4">
                            <Link
                                to="/login"
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                            >
                                Signup
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};