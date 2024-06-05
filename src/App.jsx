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
import Niveles from './components/Nivel/nivelConfig';

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
              <div className='h-screen w-full flex flex-col px-6 gap-3 border-b'>
                <Routes>
                  <Route path='dashboard/*' element={<Dashboard />} />
                  <Route path='homeworks' element={<HomeWorks />} />
                </Routes>
              </div>
            </>
          } />
          <Route path='/videoFeedback' element={<VideoFeedback />}></Route>
          <Route path='/dashboard/*' element={<Dashboard />} ></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
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