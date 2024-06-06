import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TareaCards } from './TareaCards';

export const HomeWorks = () => {
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTareas = async () => {
      const nivelId = localStorage.getItem('nivelId'); // Obtener el nivelId del localStorage

      if (!nivelId) {
        setError('No se encontró el ID del nivel en el localStorage');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/api/tareas/nivel/${nivelId}`);
        setTareas(response.data);
      } catch (error) {
        setError('Error al obtener las tareas');
        console.error(error);
      }
    };

    fetchTareas();
  }, []);

  return (
    <div className='flex gap-7'>
      <article className='w-full h-[640px] bg-slate-300 rounded-3xl px-16 py-14 grid grid-cols-3 gap-8 overflow-y-auto'>
        {error && <p>{error}</p>}
        {tareas.map((tarea) => (
          <TareaCards key={tarea._id} id={tarea._id} title={tarea.nombre} descripcion={tarea.descripcion} />
        ))}
      </article>
    </div>
  );
};
