import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [imagenPerfil, setImagenPerfil] = useState('');
  const [nivel, setNivel] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate();  // Crear instancia de useNavigate

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagenPerfil(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      nombre,
      usuario,
      contrasena,
      imagenPerfil,
      nivel,
      rol: 'user',
      videos: [],
      fechaCreacion: new Date().toISOString(),
    };

    try {
      const response = await axios.post('http://localhost:3000/api/usuarios/registro', newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // Almacenar el token en localStorage
      const { token } = response.data;
      localStorage.setItem('token', token);

      setMessage('Registro exitoso');
      setError('');
      
      // Redireccionar al usuario después del registro exitoso
      navigate('/dashboard');  // Asegúrate de tener una ruta /dashboard en tu aplicación
    } catch (err) {
      setError(err.response.data.message);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Usuario:</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contraseña:</label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
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
          <div className="mb-4">
            <label className="block text-gray-700">Nivel:</label>
            <input
              type="number"
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
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
