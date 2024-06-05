import { useState } from 'react';
import './index.css';
import { Cards } from './components/Cards';
import { InfoUser } from './components/InfoUser'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Login  from './components/Login';
import Register from './components/Register';
import { Dashboard } from './components/Dashboard';
import VideoFeedback from './components/VideoFeedback';
import Niveles from './components/Nivel/nivelConfig';

function App() {

  return (
    <BrowserRouter>
      <main className='h-screen w-full flex flex-col px-6 gap-3'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} ></Route>
          <Route path='/videoFeedback' element={<VideoFeedback />}></Route>
          <Route path='/dashboard/*' element={<Dashboard />} ></Route>

        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;
{/* {currentView === 'home' && (
)}

{currentView === 'login' && <Login />}
{currentView === 'register' && <Register />}

<InfoUser /> */}
{/* <article className='w-full h-[640px] bg-slate-300 rounded-3xl p-14 grid grid-cols-4 gap-8 overflow-y-auto'>
  <Cards />
  <Cards />
  <Cards />
  <Cards />
  <Cards />
  <Cards />
  <Cards />
  <Cards />
</article> */}
{/* <div className='flex gap-4'>
        <button
        className='h-11 w-[150px] rounded-xl flex gap-3 justify-center items-center bg-slate-400'
            onClick={() => setCurrentView('login')}
          >
            <h1 className='font-bold'>Login</h1>
          </button>
          <button
            className='h-11 w-[150px] rounded-xl flex gap-3 justify-center items-center bg-slate-400'
            onClick={() => setCurrentView('register')}
          >
            <h1 className='font-bold'>Register</h1>
          </button>
        </div> */}