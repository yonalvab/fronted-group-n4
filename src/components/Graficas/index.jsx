import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Graficas({ setModal}){

  const [imageSrc, setImageSrc] = useState();

  const fetchImage = async () => {
      try {
        /* const response = await axios.get('mongodb+srv://api-funval:ObcW8bjelh6fH9ot@video-api.5zz6cja.mongodb.net/?retryWrites=true&w=majority&appName=video-api/api/videos/estadisticas/reproducciones') */
        const response = await axios.get('http://localhost:3000/api/videos/estadisticas/etiquetas/6660a38314a920cdddc220d9')
          /*const imageUrl = URL.createObjectURL(response); */
        const d = JSON.stringify(response.data.file)
        const sinComilla = d.replace(/["]+/g, '')
        setImageSrc(sinComilla)
        console.log(imageSrc);      
      } catch (error) {
        console.error('Error al descargar la imagen:', error);
      }
    };

  useEffect(() => { 
    fetchImage();
  }, []);
  
  return (
    <>           
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 border-2'>       
        <div className=" bg-slate-200 bg-opacity-80 p-2 shadow-lg max-w-5xl w-full flex flex-col justify-center items-center h-[500px] max-h-[500px] gap-9 rounded-2xl">
          <div className='flex justify-end'>
             <button onClick={()=> setModal(false)}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
             </button>
          </div>
         
          <div className='flex justify-center items-center gap-8 w-full h-full'>
               {imageSrc ? 
                  <img src={`http://localhost:3000/uploads/estadisticas/${imageSrc}`} alt="No hay grafica" /> : 'Cargando imagen...'
               }
            </div>
            
        </div>
        
    </div>
    </>
      
  )
}

export default Graficas;