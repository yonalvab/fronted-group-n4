
import { useState } from 'react';
import './index.css';
import lupa from './assets/lupa.png';
import logovideo from './assets/logovideo.png';
import { Cards } from './components/Cards';
import Login from './components/Login';
import Register from './components/Register';
import { InfoUser } from './components/InfoUser'


function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <>

      <main className='h-screen w-full flex flex-col px-6 gap-3'>
        <header className='bg-slate-300 h-14 w-full flex items-center pr-9 pl-2 mt-3 justify-between rounded-full'>
          <div className='flex items-center'>
            <div className='flex items-center gap-[2px]'>
              <img className='w-12 h-12' src={logovideo} alt="Logo" />
              <span className='text-[30px] font-poetsen text-[#D80000]'>StreamV</span>

            </div>
            <div className='bg-white w-[450px] h-9 flex items-center gap-2 px-3 rounded-full ml-[80px]'>
              <div className='w-7 border-r-2'>
                <img className='h-5 w-5' src={lupa} alt="Search" />
              </div>
              <input className='w-[380px] ml-1 focus:outline-none' type="text" placeholder='Excribe algo euu' />
            </div>
          </div>
          <div className='flex gap-4'>
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
          </div>
        </header>


        {currentView === 'home' && (
          <article className='w-full h-[640px] bg-slate-300 rounded-3xl p-14 grid grid-cols-4 gap-8 overflow-y-auto'>

        <div className=' flex gap-4 ' >
          <article className=' w-[980px] h-[640px] bg-slate-300 rounded-3xl p-14 grid grid-cols-2 gap-8 overflow-y-auto will-change-scroll ' >

            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </article>

        )}

        {currentView === 'login' && <Login />}
        {currentView === 'register' && <Register />}


          <InfoUser />
        </div>
      </main >
    </>
  );
}

export default App;
