import React from 'react';
import { Link } from 'react-router-dom';
import { SignupForm } from '../components/SignupForm';

export const SignupPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            Sign in here
                        </Link>
                    </p>
                </div>

                <div className="mt-8">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
};