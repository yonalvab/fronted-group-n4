import { useState } from 'react'
import './index.css'
import lupa from './assets/lupa.png'
import logovideo from './assets/logovideo.png'
import { Cards } from './components/Cards'

function App() {

  return (
    <>
      <main className=' h-screen w-full flex flex-col px-6 gap-3  '  >
        <header className=' bg-slate-300 h-14 w-[1390px] flex items-center pr-9 pl-2 mt-3 justify-between rounded-full '>
          <div className=' flex items-center ' >
            <div className=' flex items-center gap-[2px] ' >
              <img className=' w-12 h-12 ' src={logovideo} alt="" />
              <span className=' text-[30px] font-poetsen text-[#D80000]  ' >StreamV</span>
            </div>
            <div className=' bg-white w-[450px] h-9 flex items-center gap-2 px-3 rounded-full ml-[80px] ' >
              <div className=' w-7 border-r-2 ' >
                <img className=' h-5 w-5 ' src={lupa} alt="" />
              </div>
              <input className=' w-[380px] ml-1 focus:outline-none ' type="text" placeholder='Excribe algo euu' />
            </div>
          </div>
          <div>
            <div className=' h-11 w-[150px] rounded-xl flex gap-3 justify-center items-center bg-slate-400 ' >
              <img className=' w-9 h-9 ' src={logovideo} alt="" />
              <h1 className='  font-bold ' >Yon</h1>
              <p className='  font-bold ' >↓</p>
            </div>
          </div>
        </header>
        <article className=' w-[1390px] h-[640px] bg-slate-300 rounded-3xl p-14 grid grid-cols-4 gap-8 overflow-y-auto will-change-scroll ' >
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />

          <Cards />
          <Cards />
          <Cards />
        </article>
      </main >
    </>
  )
}

export default App
