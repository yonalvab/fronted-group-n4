import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Graficas({ setModal}){

  const [imageSrc, setImageSrc] = useState(null);

  const fetchImage = async () => {
      try {
        /* const response = await axios.get('mongodb+srv://api-funval:ObcW8bjelh6fH9ot@video-api.5zz6cja.mongodb.net/?retryWrites=true&w=majority&appName=video-api/api/videos/estadisticas/reproducciones') */
        const response = await axios.get('http://localhost:3000/api/videos/estadisticas/reproducciones')
          /*const imageUrl = URL.createObjectURL(response); */
       /*  const d = JSON.stringify(response) */
        console.log('response'+response.data);
        setImageSrc(response.data);      
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
          <div className='flex items-center gap-8 w-[20px] h-[10px]s'>
               {imageSrc ? 
                  <img src={'/img/'+imageSrc} alt="Descargada" /> : 'Cargando imagen...'
               }
            </div>
        </div>
        <button onClick={()=> setModal(false)}>Cerrar</button>
    </div>
    </>
      
  )
}

export default Graficas;