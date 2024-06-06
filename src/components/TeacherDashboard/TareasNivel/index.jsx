import { useState, useEffect } from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export const TareasNivel = () => {
  const { id } = useParams(); // Obtener el id del nivel desde los parámetros de la ruta
  const [tareas, setTareas] = useState([]);
  const [nombreTarea, setNombreTarea] = useState('');
  const [descripcionTarea, setDescripcionTarea] = useState('');
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/tareas/nivel/${id}`);
        setTareas(response.data);
      } catch (error) {
        setError('Error al obtener las tareas');
        console.error(error);
      }
    };

    fetchTareas();
  }, [id]);

  const handleCrear = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/tareas/crear', {
        nombre: nombreTarea,
        descripcion: descripcionTarea,
        nivel: id,
        docente: '6661c189e927890149d805f1' // ID del docente proporcionado
      });
      console.log(response.data);
      setOpenModal(false);
      window.location.reload();
    } catch (error) {
      console.error('Error al crear la tarea', error);
    }
  };

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

  const handleCancelar = () => {
    setOpenModal(false);
  };

  return (
    <div className="flex flex-col gap-7 h-[90%] rounded-3xl bg-white justify-center items-center px-16 py-14">
      <div className="w-full flex flex-col justify-center items-center text-slate-800 font-black text-4xl h-1/6">
        TAREAS DEL NIVEL
        <button onClick={() => setOpenModal(true)} className="w-[200px] mt-4 bg-green-600 hover:bg-green-500 text-white flex items-center gap-2 justify-center text-sm rounded-md h-10">
          Agregar Tarea
        </button>
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
                className="w-6/12 bg-slate-600 hover:bg-slate-500 text-white flex items-center gap-2 justify-center text-sm rounded-md h-10"
              >
                Entregas
              </Link>

              <button
                onClick={() => {
                  handleClick(tarea._id, "eliminar");
                }}
                className="w-3/12 bg-red-600 hover:bg-red-500 text-white flex items-center gap-2 justify-center text-sm rounded-md h-10"
              >
                <FaRegTrashAlt />
              </button>
              <button className="w-3/12 bg-orange-600 hover:bg-orange-500 text-white flex items-center gap-2 justify-center text-sm rounded-md h-10">
                <FaRegEdit />
              </button>
            </div>
          </div>
        ))}
      </div>

      {openModal && (
        <div className="w-full h-full bg-slate-600 bg-opacity-20 fixed flex items-center justify-center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="m-8 flex gap-6 flex-col">
              <div className="flex items-center justify-center flex-col">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombretarea">
                  Nombre de la Tarea
                </label>
                <input
                  className="shadow appearance-none text-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombretarea"
                  type="text"
                  placeholder="Ingrese el nombre..."
                  value={nombreTarea}
                  onChange={(e) => setNombreTarea(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripciontarea">
                  Descripción de la Tarea
                </label>
                <textarea
                  className="shadow appearance-none text-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="descripciontarea"
                  placeholder="Ingrese la descripción..."
                  value={descripcionTarea}
                  onChange={(e) => setDescripcionTarea(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleCrear}
              >
                Crear
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleCancelar}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
