import { useState } from "react";
import { FaGripHorizontal } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

export const TeacherDashboard = () => {

  const [error, setError] = useState(null);


  return (
    <div className='flex flex-col gap-7 h-[90%] rounded-3xl bg-white justify-center items-center px-16 py-14'>
    <div className="w-full flex justify-center items-center text-slate-800 font-black text-4xl h-28">BIENVENIDO A SU DASHBOARD</div>
      <div className='w-full h-64 flex justify-center items-center  grid grid-cols-3 gap-8 overflow-y-auto'>
        {/* {error && <p>{error}</p>} */}
        <div className="flex justify-center items-center">
        <Link to="/app/niveles" className="w-4/6 bg-red-600 hover:bg-red-500 text-white flex items-center gap-2 justify-center text-xl rounded-md h-32" ><FaGripHorizontal /> NIVELES</Link>

        </div>
        <div className="flex justify-center items-center">
        <Link to="/app/alumnos" className="w-4/6 bg-red-600 hover:bg-red-500 text-white flex items-center gap-2 justify-center text-xl rounded-md h-32" ><FaUserFriends /> ESTUDIANTES</Link>

        </div>
        <div className="flex justify-center items-center">
        <Link to="/app/tareas" className="w-4/6 bg-red-600 hover:bg-red-500 text-white flex items-center gap-2 justify-center text-xl rounded-md h-32" ><FaTasks />
 TAREAS</Link>

        </div>
      </div>
    </div>
  );
};
