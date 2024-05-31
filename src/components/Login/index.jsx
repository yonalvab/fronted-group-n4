import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // shorthand for { email: email, password: password }
            });

            if (response.ok) {
                setMessage('Login successful');
                // Aquí podrías redirigir al usuario a otra página si el login es exitoso
            } else {
                const data = await response.json();
                setMessage(data.message || 'Error: Unable to login.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error: Unable to login. Please try again later.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-700 to-purple-900">
            <div className="max-w-md w-full bg-white bg-opacity-10 p-8 shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Login</h2>
                {message && <p className="text-red-500 text-center mb-4">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white">Username</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-white rounded bg-transparent text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-white rounded bg-transparent text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <input type="checkbox" className="mr-2" />
                            <span className="text-white">Remember me</span>
                        </div>
                        <Link to="/forgot-password" className="text-white hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-white text-purple-700 rounded hover:bg-gray-200"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <Link to="/register" className="text-white hover:underline">
                        Don't have an account? Register
                    </Link>
                </div>
            </div>
        </div>
    );
};
