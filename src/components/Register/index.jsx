import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { Link, useNavigate } from 'react-router-dom';
import IconContraseña from '../../assets/102643.png';
import IconNombre from '../../assets/imagenNombre.png';
import IconUsuario from '../../assets/images.png';
import './style.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    contrasena: '',
    imagenPerfil: null,
    nivel: ''
  });
  const [niveles, setNiveles] = useState([]); 
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNiveles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/niveles');
        setNiveles(response.data); 
      } catch (error) {
        console.error('Error fetching niveles:', error);
      }
    };
    fetchNiveles();
  }, []);

  const handleImageUpload = useCallback((e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      imagenPerfil: file,
    }));
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    const { nombre, usuario, contrasena, imagenPerfil, nivel } = formData;
    const formDataToSend = new FormData();
    formDataToSend.append('nombre', nombre);
    formDataToSend.append('usuario', usuario);
    formDataToSend.append('contrasena', contrasena);
    formDataToSend.append('nivel', nivel);
    formDataToSend.append('imagenPerfil', imagenPerfil);
    formDataToSend.append('rol', 'user');
    formDataToSend.append('videos', JSON.stringify([]));
    formDataToSend.append('fechaCreacion', new Date().toISOString());

    try {
      const response = await axios.post('http://localhost:3000/api/usuarios/registro', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { token } = response.data;
      const encryptedToken = CryptoJS.AES.encrypt(token, 'secret-key').toString();
      localStorage.setItem('token', encryptedToken);

      setMessage('Registro exitoso');
      setError('');

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrar');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center register-bg">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4 flex items-center">
            <img src={IconNombre} alt="Nombre" className="w-6 h-6 mr-2" />
            <label className="block text-gray-700">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <img src={IconUsuario} alt="Usuario" className="w-6 h-6 mr-2" />
            <label className="block text-gray-700">Usuario:</label>
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <img src={IconContraseña} alt="Contraseña" className="w-6 h-6 mr-2" />
            <label className="block text-gray-700">Contraseña:</label>
            <input
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Imagen de Perfil:</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700">Nivel:</label>
            <select
              name="nivel"
              value={formData.nivel}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            >
              <option value="">Selecciona un nivel</option>
              {niveles.map((nivel) => (
                <option key={nivel._id} value={nivel._id}>{nivel.nombre}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
