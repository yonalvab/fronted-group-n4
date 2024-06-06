import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export const AlumnosNivel = () => {
  const { id } = useParams(); 
  const [alumnos, setAlumnos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/usuarios/nivel/${id}`);
        setAlumnos(response.data.listausuarios);
      } catch (error) {
        setError('Error al obtener los usuarios');
        console.error(error);
      }
    };

    fetchAlumnos();
  }, [id]);

  

  return (
    <div className="flex flex-col gap-7 h-[90%] rounded-3xl bg-white justify-center items-center px-16 py-14">
      <div className="w-full flex justify-center items-center text-slate-800 font-black text-4xl h-28">ALUMNOS DEL NIVEL</div>
      <div className="w-full h-64 flex justify-center items-center grid grid-cols-4 gap-8 overflow-y-auto">
        {error && <p>{error}</p>}
        {(alumnos.length > 0) && alumnos.map((alumno) => (
          <div key={alumno._id} className="flex justify-center items-center">
            <div className="w-4/6 bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-2 justify-center text-xl rounded-md h-32">
              {alumno.nombre}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
