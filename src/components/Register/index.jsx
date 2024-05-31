import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('/usuarios/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // shorthand for { email: email, password: password }
            });

            if (response.ok) {
                setMessage('Registration successful');
                // Aquí podrías redirigir al usuario a otra página si el registro es exitoso
            } else {
                const data = await response.json();
                setMessage(data.message || 'Error: Unable to register.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error: Unable to register. Please try again later.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-700 to-purple-900">
            <div className="max-w-md w-full bg-white bg-opacity-10 p-8 shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Register</h2>
                {message && <p className="text-red-500 text-center mb-4">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-white rounded bg-transparent text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-white rounded bg-transparent text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-white rounded bg-transparent text-white"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-white text-purple-700 rounded hover:bg-gray-200"
                    >
                        Register
                    </button>
                </form>
                <div className="text-center mt-4">
                    <Link to="/login" className="text-white hover:underline">
                        Already have an account? Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
