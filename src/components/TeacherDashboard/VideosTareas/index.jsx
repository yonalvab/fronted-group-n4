import { useState, useEffect } from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export const VideosTareas = () => {
  const { id } = useParams(); 
  const [videos, setVideos] = useState([]);
  
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/tareas/videos/${id}`);
        setVideos(response.data);
        console.log(response.data)
      } catch (error) {
        setError('Aun no se han subido videos');
        console.error(error);
      }
    };

    fetchVideos();
  }, [id]);



  return (
    <div className="flex flex-col gap-7 h-[90%] rounded-3xl bg-white justify-center items-center px-16 py-14">
      <div className="w-full flex flex-col justify-center items-center text-slate-800 font-black text-4xl h-1/6">
        VIDEOS DE LA TAREA
        <button onClick={() => setOpenModal(true)} className="w-[200px] mt-4 bg-green-600 hover:bg-green-500 text-white flex items-center gap-2 justify-center text-sm rounded-md h-10">
          Editar Tarea
        </button>
      </div>

      <div className="w-full h-5/6 flex justify-center items-center grid grid-cols-4 gap-8 overflow-y-auto">
        {error && <p>{error}</p>}
        {videos.map((video) => (
          <div
            key={video._id}
            id={video._id}
            className="flex flex-col justify-center items-center bg-slate-200 h-48 rounded-md"
          >
            <div className="w-10/12 flex flex-col items-center text-xl pb-6 justify-center gap-4">
            <img className=" h-[120px] rounded-full" src={`http://localhost:3000/uploads/miniaturas/${video.miniatura}`} alt="" srcSet="" />
              {video.titulo}
              <p className="text-sm">{video.descripcion}</p>
            </div>

            <div className="w-10/12 flex gap-3">
              <Link
                to={`/app/video/${video._id}`}
                className="w-full bg-slate-600 hover:bg-slate-500 text-white flex items-center gap-2 justify-center text-sm rounded-md h-10"
              >
                Ver Video
              </Link>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
