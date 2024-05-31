import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Agregar logica del backend
        setMessage('Login succesful');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
                {message && <p className="text-red-500 text-center mb-4">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to='/dashboard' >
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </Link>
                    <Link to='/register' >
                        <a href="">Register</a>
                    </Link>
                </form>
            </div>
        </div>
    );
};
