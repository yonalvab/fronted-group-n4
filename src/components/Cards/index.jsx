import React from 'react'
import miniatura from '../../assets/61.jpg'

export const Cards = ({ miniatura, titulo, descripcion}) => {
    /* console.log(miniatura, titulo, descripcion); */
    return (
        <>
            <div className="relative rounded-lg -skew-x-3 -translate-y-2  hover:-translate-y-1 hover:-translate-x-0 hover:skew-x-0 duration-500 w-72 h-56 p-2 mb- bg-neutral-50 card-compact hover:bg-base-200 transition-all [box-shadow:10px_10px_#9299A3] hover:[box-shadow:4px_4px_#9299A3]"
            >
                <div className="w-full h-3/4 mb-8 pb-4">
                    <img
                        src={miniatura? miniatura:'images.png'}
                        alt="No encontrado"
                        className="min-h-full rounded-lg border border-opacity-5 "
                    />
                </div>
                <div className="absolute text-black bottom-4 left-0 px-4 gap-4">
                    <span className="font-bold  text-blue-700">{titulo? titulo:'Hola'}</span>
                    <p className="text-sm opacity-80 line-clamp-2">
                        {descripcion? descripcion: 'descripcion'}
                    </p>
                </div>
            </div>
        </>
    )
}
