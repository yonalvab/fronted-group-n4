import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import { Dashboard } from './components/Dashboard';
import { HomeWorks } from './components/Homeworks';
import { Header } from './components/Header';
import { UserProvider } from './services/UserContext';
import VideoFeedback from './components/VideoFeedback';
import { TeacherDashboard } from './components/TeacherDashboard';
import { Niveles } from './components/TeacherDashboard/Niveles';
import { TareasNivel } from './components/TeacherDashboard/TareasNivel';
import { AlumnosNivel } from './components/TeacherDashboard/AlumnosNivel';
import { VideosTareas } from './components/TeacherDashboard/VideosTareas';
import { Alumnos } from './components/TeacherDashboard/Alumnos';
import { Tareas } from './components/TeacherDashboard/Tareas';
// import Niveles from './components/Nivel/nivelConfig';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/app/*' element={
            <>
              <Header />
              <div className='h-screen bg-stone-200 justify-center pt-20 w-full flex flex-col px-6 gap-3 border-b'>
                <Routes>
                  <Route path='dashboard/*' element={<Dashboard />} />
                  <Route path='homeworks' element={<HomeWorks />} />
                  <Route path='video/:id' element={<VideoFeedback />}></Route>
                  <Route path='teacher' element={<TeacherDashboard />}></Route>
                  <Route path='niveles' element={<Niveles />}></Route>
                  <Route path="tareasnivel/:id" element={<TareasNivel />} />
                  <Route path="alumnosnivel/:id" element={<AlumnosNivel />} />
                  <Route path="videostareas/:id" element={<VideosTareas />} />
                  <Route path="alumnos" element={<Alumnos />} />
                  <Route path="tareas" element={<Tareas />} />
                  <Route path='videoFeedback' element={<VideoFeedback />} />
                </Routes>
              </div>
            </>
          } />

          <Route path='/dashboard/*' element={<Dashboard />} ></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
