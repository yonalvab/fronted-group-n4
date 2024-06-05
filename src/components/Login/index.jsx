import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import IconUsuario from '../../assets/images.png';
import IconContraseña from '../../assets/102643.png';
import './style.css'; 

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const user = {
      usuario,
      contrasena,
    };
  
    try {
      const response = await axios.post('http://localhost:3000/api/usuarios/login', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const { token, role } = response.data;
  
      // Verificar el rol del usuario
      if (role !== 'usuario' && role !== 'docente' && role !== 'admin') {
        setError('Only registered users, teachers, and admins can login.');
        return;
      }
  
      const encryptedToken = CryptoJS.AES.encrypt(token, 'secret-key').toString();
      localStorage.setItem('token', encryptedToken);
  
      setMessage(response.data.message);
      setError('');
      
      navigate('/dashboard');
    } catch (err) {
      setError(err.response.data.message);
      setMessage('');
    }
  }; 
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4 flex items-center">
            <img src={IconUsuario} alt="Usuario" className="w-6 h-6 mr-2" />
            <label className="block text-gray-700">Usuario:</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <img src={IconContraseña} alt="Contraseña" className="w-6 h-6 mr-2" />
            <label className="block text-gray-700">Contraseña:</label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
              <label className="ml-2 block text-gray-700">Recuerdame</label>
            </div>
            <div>
              <a href="#" className="text-purple-600 hover:underline">Olvidaste tu contraseña?</a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don’t have an account? <a href="/register" className="text-purple-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
