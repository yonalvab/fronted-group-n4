import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Cards } from '../Cards';
import { InfoUser } from '../InfoUser';
import axios from 'axios';

export const Dashboard = () => {
  const [miniVideos, setMiniVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const userId = localStorage.getItem('userId'); // Obtener el userId del localStorage

      if (!userId) {
        console.error('No se encontró el ID del usuario en el localStorage');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/api/videos/usuario/${userId}`);
        setMiniVideos(response.data.listaDeVideos);
        console.log(miniVideos);
      } catch (error) {
        console.error('Error fetching miniatura:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className='flex gap-7'>
      <article className='w-full h-[640px] bg-slate-300 rounded-3xl px-16 py-14 grid grid-cols-2 gap-8 overflow-y-auto'>
        {miniVideos.map(video => (
          <Cards key={video._id} miniatura={`http://localhost:3000/uploads/miniaturas/${video.miniatura}`} titulo={video.titulo} descripcion={video.descripcion} />
        ))}
      </article>
      <InfoUser />
    </div>
  );
};
