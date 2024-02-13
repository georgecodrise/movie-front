import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useApp } from '../hooks/useApp'

export default function Funciones() {

  const {cartelera, getCartelera} = useApp();

  const onMovieID=(id)=>{
    console.log(id)
  }

  useEffect( ()=>{
    getCartelera();
  },[] )

  return (
    <div className='flex flex-col p-3'>
      <p className='text-4xl font-semibold'>Cartelera</p>

      <div className="mt-5">        
        
        <div className='bg-blue-500 rounded-md w-fit p-3 hover:bg-blue-600'> 
         <Link to='/funciones/new' className='text-white font-semibold'> Crear Nueva Función </Link>       
        </div>

        <div className='mt-3'>

          <div className='grid grid-cols-4 gap-4'>
          {cartelera.map(cartelera=>
            <div className='rounded-lg border p-3' key={cartelera.id}>
              <p>{cartelera.pelicula}</p>
              <p>{cartelera.sala}</p>
              <p>{cartelera.fecha}</p>
              <p>{cartelera.hora}</p>

              <div className='flex gap-3 mt-3'>
              <button onClick={()=>{onMovieID(cartelera.id)}}
                      className='bg-green-500 p-2 text-white font-semibold rounded-lg'>Editar</button>
              <button onClick={()=>{onMovieID(cartelera.id)}}
                      className='bg-red-500 p-2 text-white font-semibold rounded-lg'>Eliminar</button>
              </div>
              
            </div>
          )}
          </div>
          
          
         
         {/* TODO: Mostar la cartelera */}

        </div>

      </div>

    </div>
  )
}
