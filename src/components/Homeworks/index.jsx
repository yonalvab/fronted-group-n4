import React from 'react';
import { TareaCards } from './TareaCards';

export const HomeWorks = () => {
  return (
    <div className='flex gap-7'>
      <article className='w-full h-[640px] bg-slate-300 rounded-3xl px-16 py-14 grid grid-cols-3 gap-8 overflow-y-auto'>
        <TareaCards title="Hacer un video de 30seg" descripcion="Grábate a ti mismo en un video" />
        <TareaCards title="Presentación en inglés" descripcion="Grábate a ti mismo en un video" />
        <TareaCards title="What are you doing?" descripcion="Grábate a ti mismo en un video" />
        <TareaCards title="Preséntate en inglés" descripcion="Grábate a ti mismo en un video" />
      </article>
    </div>
  );
};
