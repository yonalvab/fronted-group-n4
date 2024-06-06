import React, { useState } from 'react'
import lupa from '../../assets/lupa.png';
import logovideo from '../../assets/logovideo.png';
import { Link } from 'react-router-dom';
import Graficas from '../Graficas';

export const Header = () => {
    const [modal, setModal] = useState(false);
    return (
        <>

            <header className='w-full flex items-center justify-between rounded-none bg-white m-0 px-16 h-20 shadow-lg z-20 fixed'>
                <div className='flex items-center justify-between w-full'>
                    <Link to="/app/dashboard" >
                        <div className='flex items-center' >
                            <div className='flex items-center gap-[2px]'>
                            <svg width="200px" height="" viewBox="0 0 472 132" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path fill="#c0c0c0" stroke="#c0c0c0" strokeWidth="0.09375" opacity="0.75" d=" M 471.00 0.00 L 472.00 0.00 L 472.00 132.00 L 471.00 132.00 C 471.00 88.00 471.00 44.00 471.00 0.00 Z" />
<path fill="#053763" stroke="#053763" strokeWidth="0.09375" opacity="1.00" d=" M 85.53 32.56 C 98.50 32.12 111.52 32.24 124.49 32.49 C 124.76 35.58 124.73 38.67 124.55 41.76 C 115.41 42.93 106.12 41.98 96.92 42.27 C 96.47 46.54 96.67 50.83 96.77 55.11 C 103.96 55.46 111.17 54.99 118.34 55.65 C 118.60 58.56 118.59 61.49 118.34 64.40 C 111.22 65.55 103.96 64.41 96.79 65.04 C 96.49 71.29 96.83 77.56 96.61 83.81 C 92.88 84.48 89.05 84.43 85.32 83.82 C 85.36 66.74 84.90 49.62 85.53 32.56 Z" />
<path fill="#043764" stroke="#043764" strokeWidth="0.09375" opacity="1.00" d=" M 135.51 32.50 C 139.13 32.03 142.81 32.03 146.43 32.59 C 146.93 42.39 146.41 52.22 146.69 62.03 C 146.94 66.37 148.73 71.12 152.87 73.13 C 157.08 75.00 162.37 74.84 166.25 72.26 C 169.00 70.00 170.62 66.54 171.03 63.04 C 171.79 52.93 170.55 42.67 171.62 32.62 C 174.92 31.72 178.42 32.31 181.80 32.36 C 182.80 40.52 181.99 48.79 182.26 57.00 C 182.29 63.25 182.80 70.39 178.44 75.46 C 168.51 88.06 146.29 86.87 137.63 73.39 C 134.43 67.44 135.42 60.49 135.28 54.01 C 135.41 46.84 134.99 39.66 135.51 32.50 Z" />
<path fill="#043763" stroke="#043763" strokeWidth="0.09375" opacity="1.00" d=" M 192.57 32.59 C 195.24 32.39 197.94 32.18 200.61 32.50 C 205.21 35.45 208.16 40.24 211.78 44.22 C 215.65 48.42 218.85 53.15 222.52 57.52 C 224.54 59.78 225.65 62.79 228.17 64.61 C 228.80 53.95 227.96 43.26 228.59 32.60 C 231.82 32.78 235.99 31.24 238.63 33.36 C 238.87 50.22 238.72 67.11 238.70 83.98 C 235.82 84.46 232.90 84.35 230.00 84.25 C 221.41 72.09 213.36 59.33 202.89 48.70 C 202.39 60.41 202.91 72.15 202.61 83.87 C 199.25 84.54 195.77 84.57 192.41 83.86 C 192.39 66.78 192.10 49.67 192.57 32.59 Z" />
<path fill="#043664" stroke="#043664" strokeWidth="0.09375" opacity="1.00" d=" M 246.95 32.28 C 250.75 32.38 254.71 31.67 258.40 32.62 C 262.59 40.74 265.22 49.57 269.10 57.84 C 270.41 60.66 271.07 63.74 272.46 66.53 C 272.76 66.54 273.36 66.57 273.66 66.59 C 278.20 55.17 282.72 43.74 287.48 32.41 C 291.32 32.07 295.19 32.16 299.04 32.29 C 299.74 34.50 298.30 36.48 297.49 38.42 C 291.03 53.34 284.94 68.42 278.11 83.17 C 276.05 85.24 272.62 84.08 269.99 84.25 C 267.46 84.24 267.20 81.25 266.36 79.49 C 259.88 64.92 253.76 50.20 247.24 35.64 C 246.70 34.57 246.61 33.45 246.95 32.28 Z" />
<path fill="#2c7de1" stroke="#2c7de1" strokeWidth="0.09375" opacity="1.00" d=" M 322.36 32.32 C 325.50 30.53 328.54 33.39 329.91 36.05 C 335.82 48.24 341.48 60.55 347.23 72.82 C 348.36 75.58 350.25 78.40 349.47 81.52 C 348.01 84.77 343.03 84.51 340.96 82.05 C 337.04 77.51 332.17 72.99 325.95 72.31 C 320.14 71.58 314.69 74.83 310.84 78.91 C 308.65 81.09 306.72 84.48 303.08 83.73 C 299.50 84.08 298.35 79.43 299.82 76.85 C 306.03 63.45 312.18 50.01 318.76 36.79 C 319.70 35.14 320.45 33.07 322.36 32.32 Z" />
<path fill="#043664" stroke="#043664" strokeWidth="0.09375" opacity="1.00" d=" M 357.75 32.73 C 361.27 31.89 364.94 32.35 368.52 32.50 C 369.31 46.29 368.31 60.14 369.03 73.94 C 377.20 74.60 385.42 73.79 393.60 74.37 C 393.98 77.50 393.96 80.66 393.69 83.79 C 386.51 84.75 379.23 84.00 372.00 84.23 C 367.12 84.11 362.20 84.60 357.36 83.79 C 357.08 68.52 357.35 53.24 357.22 37.97 C 357.31 36.23 357.00 34.36 357.75 32.73 Z" />
</svg>
                                
                            </div>
                            <div className=' bg-slate-200 w-[450px] h-9 flex items-center gap-2 px-3 rounded-full ml-[80px]'>
                                <div className='w-7 border-r-2'>
                                    <img className='h-5 w-5' src={lupa} alt="Search" />
                                </div>
                                <input className='w-[380px] bg-transparent ml-1 focus:outline-none' type="text" placeholder='Escribe aqui...' />

                            </div>
                            
                        </div>
                </Link>
                </div>
                <div className=' flex gap-3 ' >

                    <Link to="/app/dashboard" >
                        <div className='w-[48px] h-[48px] flex  justify-center cursor-pointer ' >
                            <svg className='fill-[#043764] hover:fill-[#2c7de1]' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" /></svg>
                        </div>
                    </Link>
                    
                    <Link to="/app/homeworks" >
                        <div className='w-[48px] h-[48px] flex  justify-center ' >
                            <div className=' absolute ' >
                                <svg className='fill-[#043764] hover:fill-[#2c7de1]' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"><path d="M319-250h322v-60H319v60Zm0-170h322v-60H319v60ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z" /></svg>
                            </div>
                            <div className=' relative mt-1 mr-5 h-3 w-3 bg-red-500 rounded-full ' ></div>
                        </div>
                    </Link>
                    <button className='mr-[20px]' onClick={() => setModal(true)}>Graficas</button>
                    <div className=' bg-[#2c7de1] cursor-pointer h-[48px]  w-[100px] flex items-center justify-center rounded-full text-white ' >
                        <span>Salir</span>
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
