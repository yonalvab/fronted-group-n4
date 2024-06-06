import { useState, useEffect } from "react";
import { FaGripHorizontal } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

export const Alumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchNiveles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/usuarios");
        setAlumnos(response.data.listausuarios);
      } catch (error) {
        setError("Error al obtener los niveles");
        console.error(error);
      }
    };

    fetchNiveles();
  }, []);


  async function handleClick(id, evento) {
    if (evento === "eliminar") {
      console.log("eliminar" + id);
      try {
        const response = await axios.delete(
          `http://localhost:3000/api/niveles/eliminar/${id}`
        );
        console.log(response.data);
        window.location.reload()
      } catch (error) {
        setError("Error al eliminar el Nivel");
        console.error(error);
      }
    }
  }


  const handleCancelar = () => {
    setOpenModal(false);
  };

  return (
    <div className="flex flex-col gap-7 h-[90%] rounded-3xl bg-white justify-center items-center px-16 py-14">
    
      <div className="w-full flex flex-col justify-center items-center text-slate-800 font-black text-4xl h-1/6">
        USUARIOS
      </div>

      <div className="w-full h-5/6 flex justify-center items-center  grid grid-cols-4 gap-8 overflow-y-auto">
        {(alumnos.length > 0) && alumnos.map((alumno) => (
          <div
            key={alumno._id}
            id={alumno._id}
            className="flex flex-col justify-center items-center bg-slate-200 h-48 rounded-md"
          >
            <div className="w-10/12 flex items-center text-xl pb-6 justify-center gap-4">
              Nombre: {alumno.nombre}
            </div>

            <div className="w-10/12 flex gap-3">
              <Link
                to={`/app/tareasnivel/${alumno._id}`}
                className="w-8/12 bg-slate-600 hover:bg-slate-500 text-white flex items-center gap-2 justify-center text-sm rounded-md h-10"
              >
                Perfil/Videos
              </Link>
              <button className="w-4/12 bg-orange-600 hover:bg-orange-500 text-white flex items-center gap-2 justify-center text-sm rounded-md h-10">
                <FaRegEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
      {openModal && <div className="w-full h-full bg-slate-600 bg-opacity-20 fixed flex items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="m-8 flex gap-6 flex-col">
            <div className="flex items-center justify-center flex-col">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombrenivel">
                Nombre del Nivel
              </label>
              <input
                className="shadow appearance-none text-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombrenivel"
                type="text"
                placeholder="Ingrese el nombre..."
                value={''}
                onChange={(e)=>{console.log(e.target.value)}}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={''}
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
      </div>}
    </div>
    
  );
};
