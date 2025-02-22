import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const AppPage = () => {
    const { isAuthenticated, isLoading, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, isLoading, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 text-center">
                <h1 className="text-3xl font-extrabold text-gray-900">
                    Welcome to the Application
                </h1>
                {isAuthenticated && (
                    <button
                        onClick={logout}
                        className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};