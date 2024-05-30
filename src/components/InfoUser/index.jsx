import React, { useState } from 'react'
import miniatura from '../../assets/61.jpg'
import { ScreenVideo } from '../ScreenVideo';


export const InfoUser = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <aside className=' w-[390px] h-[640px] bg-slate-300 rounded-3xl flex flex-col items-center gap-4 ' >
                <div>
                    <div className=' flex justify-end px-9 mt-4 ' >
                        <button className='h-9 w-20 bg-slate-400 rounded-lg font-bold text-white ' >Edit</button>
                    </div>
                    <div className=' h-[210px] w-[380px] flex justify-center items-center ' >
                        <img className='w-48 h-48 rounded-full ' src={miniatura} alt="" />
                    </div>
                </div>
                <div className=' w-[370px] h-[290px] bg-white rounded-3xl flex flex-col gap-4 items-center justify-center ' >
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
                    class="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-40 hover:rounded-lg active:translate-x-1 active:translate-y-1" onClick={handleOpenModal}
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
            </aside>
        </>
    )
}
