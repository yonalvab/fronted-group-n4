import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import miniatura from '../../assets/61.jpg'
import { ScreenVideo } from '../ScreenVideo'

export const EditRouter = () => {
    return (
        <>
            <Routes>
                <Route index element={<InfoDefault />} />
                <Route path='editinfo' element={<EditMyInfo />} />
            </Routes>
        </>
    )
}

export const InfoDefault = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className=' h-[210px] w-[380px] flex justify-center items-center ' >
                <img className='w-48 h-48 rounded-full ' src={miniatura} alt="" />
            </div>
            <div className=' w-[370px] h-[290px] bg-white rounded-3xl flex flex-col gap-4 items-center justify-center  ' >
                <div className=' flex items-center w-[340px] h-[40px]  gap-3' >
                    <div className=' w-[95px] border-r-2 border-x-neutral-400 ' >Nombre :</div>
                    <div>Yon Alva</div>
                </div>
                <div className=' flex items-center w-[340px] h-[40px] gap-3'>
                    <div className=' w-[95px] border-r-2 border-x-neutral-400 ' >Email :</div>
                    <div>yonalva@gmail.com</div>
                </div>
                <div className=' flex items-center w-[340px] h-[40px] gap-3' >
                    <div className=' w-[95px] border-r-2 border-x-neutral-400 ' >Celular :</div>
                    <div>945432681</div>
                </div>
                <div className=' flex items-center w-[340px] h-[40px] gap-3' >
                    <div className=' w-[95px] border-r-2 border-x-neutral-400 ' >Direccion :</div>
                    <div>El Cielo #1075</div>
                </div>
                <div className=' flex items-center w-[340px] h-[40px] gap-3' >
                    <div className=' w-[95px] border-r-2 border-x-neutral-400 ' >Contraseña :</div>
                    <div>**********</div>
                </div>
            </div>
            <button
                className="group flex items-center justify- w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-40 hover:rounded-lg active:translate-x-1 active:translate-y-1  " onClick={handleOpenModal}
            >
                <div
                    className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF">
                        <path
                            d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h506.66q27 0 46.84 19.83Q720-760.33 720-733.33V-530l160-160v420L720-430v203.33q0 27-19.83 46.84Q680.33-160 653.33-160H146.67Zm0-66.67h506.66v-506.66H146.67v506.66Zm0 0v-506.66 506.66Z"
                        ></path>
                    </svg>
                </div>
                <div
                    className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                    New Video
                </div>
            </button>
            <ScreenVideo isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    )
}

export const EditMyInfo = () => {
    return (
        <>
            <div className=' h-[210px] w-[380px] flex justify-center items-center ' >
                <img className=' absolute w-48 h-48 rounded-full ' src={miniatura} alt="" />
                <div className='relative' >
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M440-437ZM100-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l73-87h274v60H348l-73 87H100v513h680v-414h60v414q0 24-18.5 42T780-120H100Zm680-574v-86h-86v-60h86v-87h60v87h87v60h-87v86h-60ZM439.5-267q72.5 0 121.5-49t49-121.5q0-72.5-49-121T439.5-607q-72.5 0-121 48.5t-48.5 121q0 72.5 48.5 121.5t121 49Zm0-60q-47.5 0-78.5-31.5t-31-79q0-47.5 31-78.5t78.5-31q47.5 0 79 31t31.5 78.5q0 47.5-31.5 79t-79 31.5Z" /></svg>
                </div>
            </div>
            <div className=' w-[370px] h-[290px] bg-white rounded-3xl flex flex-col gap-4 items-center justify-center  ' >
                <div className=' flex items-center w-[340px] h-[40px]  gap-3' >
                    <div className=' w-[95px] border-r-2 border-x-neutral-400 ' >Nombre :</div>
                    <input type="text" />
                </div>
                <div className=' flex items-center w-[340px] h-[40px] gap-3'>
                    <div className=' w-[95px] border-r-2 border-x-neutral-400 ' >Email :</div>
                    <input type="text" />
                </div>
                <div className=' flex items-center w-[340px] h-[40px] gap-3' >
                    <div className=' w-[95px] border-r-2 border-x-neutral-400 ' >Celular :</div>
                    <input type="text" />
                </div>
                <div className=' flex items-center w-[340px] h-[40px] gap-3' >
                    <div className=' w-[95px] border-r-2 border-x-neutral-400 ' >Direccion :</div>
                    <input type="text" />
                </div>
                <div className=' flex items-center w-[340px] h-[40px] gap-3' >
                    <div className=' w-[95px] border-r-2 border-x-neutral-400 ' >Contraseña :</div>
                    <input type="text" />
                </div>
            </div>
            <Link to='/dashboard' >
                <button className=' h-[50px] w-[90px] bg-lime-600 rounded-2xl text-white font-bold ' >Guardar</button>
            </Link>
        </>
    )
}