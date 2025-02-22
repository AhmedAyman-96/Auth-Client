import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';

export const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-500 flex items-center justify-center p-4">        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                    Welcome Back
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link
                        to="/signup"
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        Sign up here
                    </Link>
                </p>
            </div>

            <div className="mt-8">
                <LoginForm />
            </div>
        </div>
        </div>
    );
};