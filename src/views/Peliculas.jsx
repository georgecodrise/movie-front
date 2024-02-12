import React from 'react'
import ModalPelicula from '../components/ModalPelicula'
import { useApp } from '../hooks/useApp'
import TablaPeliculas from '../components/TablaPeliculas'

export default function Peliculas() {


  return (
    <div className="p-3">
      <p className="text-4xl font-semibold">Peliculas</p>

      <div className="mt-3">        
        <ModalPelicula/>

        <TablaPeliculas/>

      </div>

      

      
    </div>
  )
}
