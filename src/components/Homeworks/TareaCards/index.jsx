import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SendWork } from '../SendWork';
import VideoFeedback from '../../VideoFeedback';

export const TareaCards = ({ id, title, descripcion }) => {
    const [isWorkOpen, setIsWorkOpen] = useState(false);
    const [videoEnviado, setVideoEnviado] = useState(false);

    const navigate = useNavigate();

    const handleOpenModalWork = () => {
        setIsWorkOpen(true);
    };

    const handleCloseModalWork = () => {
        setIsWorkOpen(false);
    };

    // Función para manejar la actualización de videoEnviado
    const handleVideoEnviado = (enviado) => {
        setVideoEnviado(enviado);
    };

    const handleVerFeedback = () => {
        navigate('/app/videoFeedback');
    };

    return (
        <>
            <div className="relative flex w-80 h-[190px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {descripcion}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        data-ripple-light="true"
                        type="button"
                        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        onClick={videoEnviado ? handleVerFeedback : handleOpenModalWork}
                    >
                        {videoEnviado ? 'Ver feedback' : 'Open'}
                    </button>
                </div>
            </div>
            <SendWork isOpen={isWorkOpen} onClose={handleCloseModalWork} tareaId={id} tareaTitulo={title} onVideoEnviado={handleVideoEnviado} />
        </>
    );
};