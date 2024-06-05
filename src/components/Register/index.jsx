import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/usuarios/registro', {
                nombre,
                usuario,
                contrasena: password,
                rol: 'user',
                videos: []
            });

            setMessage('Registro exitoso');
            // Puedes almacenar la información del usuario en localStorage o en el contexto de la aplicación si es necesario
            // localStorage.setItem('user', JSON.stringify(response.data.newUser));

            // Navegar al dashboard u otra página después del registro exitoso
            navigate('/dashboard');
        } catch (error) {
            setMessage(error.response.data.message || 'Error en el registro');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-8 text-center">Registro</h2>
                {message && <p className="text-red-500 text-center mb-4">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Usuario</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Confirmar Contraseña</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        Registrarse
                    </button>
                </form>
                <Link to='/login' className="block mt-4 text-center text-blue-500 hover:underline">¿Ya tienes una cuenta? Inicia sesión</Link>
            </div>
        </div>
    );
};

export default Register;
