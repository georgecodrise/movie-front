import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
        <div className='mt-5'>
            <p className='text-5xl text-white font-semibold text-center'>Admin</p>
        </div>
        
        <div className='flex flex-col mt-5'>
            
          <Link to='/peliculas' className='text-white font-bold text-lg w-full p-2 hover:bg-blue-700 cursor-pointer'>Peliculas</Link>
          <Link to='/salas' className='text-white font-bold text-lg w-full p-2 hover:bg-blue-700 cursor-pointer'>Salas</Link>
          <Link to='/reservas' className='text-white font-bold text-lg w-full p-2 hover:bg-blue-700 cursor-pointer'>Reservaciones</Link>
            
        </div>
    </div>
  )
}
