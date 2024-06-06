import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Graficas2 = () => {
    const [miGrafica, setMiGrafica] = useState([])
    useEffect(() => {
      const fetchReproducciones = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/videos/estadisticas/:id')
          setMiGrafica(response.data)
          console.log(miGrafica);
        } catch (error) {
          console.error('Error fetching reproducciones:', error)
        }
      }
  
      fetchReproducciones()
    }, [])
  return (
    <div>Graficas2</div>
  )
}
