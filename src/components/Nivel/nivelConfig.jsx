import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Niveles = () => {
    const [niveles, setNiveles] = useState([])
  
    useEffect(() => {
      const fetchNiveles = async () => {
        try {
          const response = await axios.get('/niveles')
          setNiveles(response.data)
        } catch (error) {
          console.error('Error fetching niveles:', error)
        }
      }
  
      fetchNiveles()
    }, [])
  
    return (
      <div>
        <h1>Niveles</h1>
        <ul>
          {niveles.map(nivel => (
            <li key={nivel.id}>{nivel.nombre}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default Niveles