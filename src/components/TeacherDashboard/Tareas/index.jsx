import { useState, useEffect } from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export const Tareas = () => {
  const { id } = useParams(); 
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/tareas`);
        setTareas(response.data);
      } catch (error) {
        setError('Error al obtener las tareas');
        console.error(error);
      }
    };

    fetchTareas();
  }, [id]);

  const handleClick = async (tareaId, evento) => {
    if (evento === "eliminar") {
      console.log("eliminar " + tareaId);
      try {
        const response = await axios.delete(
          `http://localhost:3000/api/tareas/eliminar/${tareaId}`
        );
        console.log(response.data);
        window.location.reload();
      } catch (error) {
        setError("Error al eliminar la tarea");
        console.error(error);
      }
    }
  };


  return (
    <div className="flex flex-col gap-7 h-[90%] rounded-3xl bg-white justify-center items-center px-16 py-14">
      <div className="w-full flex flex-col justify-center items-center text-slate-800 font-black text-4xl h-1/6">
        TAREAS DEL DOCENTE
      </div>

      <div className="w-full h-5/6 flex justify-center items-center grid grid-cols-4 gap-8 overflow-y-auto">
        {error && <p>{error}</p>}
        {tareas.map((tarea) => (
          <div
            key={tarea._id}
            id={tarea._id}
            className="flex flex-col justify-center items-center bg-slate-200 h-48 rounded-md"
          >
            <div className="w-10/12 flex flex-col items-center text-xl pb-6 justify-center gap-4">
              {tarea.nombre}
              <p className="text-sm">{tarea.descripcion}</p>
            </div>

            <div className="w-10/12 flex gap-3">
              <Link
                to={`/app/videostareas/${tarea._id}`}
                className="w-8/12 bg-slate-600 hover:bg-slate-500 text-white flex items-center gap-2 justify-center text-sm rounded-md h-10"
              >
                Entregas
              </Link>

              <button
                onClick={() => {
                  handleClick(tarea._id, "eliminar");
                }}
                className="w-4/12 bg-red-600 hover:bg-red-500 text-white flex items-center gap-2 justify-center text-sm rounded-md h-10"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
