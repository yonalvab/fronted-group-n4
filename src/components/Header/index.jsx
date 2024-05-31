import React from 'react'
import lupa from '../../assets/lupa.png';
import logovideo from '../../assets/logovideo.png';

export const Header = () => {
    return (
        <>
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
            </header>
        </>
    )
}
