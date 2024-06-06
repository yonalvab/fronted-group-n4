import React, { useState } from 'react'
import lupa from '../../assets/lupa.png';
import logovideo from '../../assets/logovideo.png';
import { Link } from 'react-router-dom';
import Graficas from '../Graficas';
import IconGrafic from '../../assets/statics.svg'


export const Header = () => {
    const [modal, setModal] = useState(false);
    return (
        <>

            <header className='w-full flex items-center justify-between rounded-none bg-white m-0 px-16 h-20 shadow-lg z-20 fixed'>
                <div className='flex items-center justify-between w-full'>
                    <Link to="/app/dashboard" >
                        <div className='flex items-center' >
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
                            <input className='w-[380px] ml-1 focus:outline-none' type="text" placeholder='Escribe aqui' />
                        </div>
                    </Link>
                </div>
                <div className=' flex gap-3 ' >
                    <Link to="/app/dashboard" >
                        <div className='w-[48px] h-[48px] flex hover:bg-slate-400 hover:rounded-2xl justify-center cursor-pointer ' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" /></svg>
                        </div>
                    </Link>
                    <button onClick={() => setModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                    </button>
                    <Link to="/app/homeworks" >
                        <div className='w-[48px] h-[48px] flex hover:bg-slate-400 hover:rounded-2xl justify-center ' >
                            <div className=' absolute ' >
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M319-250h322v-60H319v60Zm0-170h322v-60H319v60ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z" /></svg>
                            </div>
                            <div className=' relative mt-1 mr-5 h-3 w-3 bg-red-500 rounded-full ' ></div>
                        </div>
                    </Link>
                    <div className=' bg-slate-100 h-[40px] w-[120px] flex items-center justify-center rounded-xl ' >
                        <span>cerrar sesion</span>
                    </div>
                </div>
            </header>
            {modal && (
                <Graficas setModal={setModal}/>
            )
            }
        </>
    )
}
