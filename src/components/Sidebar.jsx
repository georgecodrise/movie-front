import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

export default function Sidebar() {

  const { logout } = useAuth();

  return (
    <div>
        <div className='mt-5'>
            <p className='text-5xl text-white font-semibold text-center'>Admin</p>
        </div>
        
        <div className='flex flex-col mt-5'>
            
          <Link to='/' className='text-white font-bold text-lg w-full p-2 hover:bg-blue-700 cursor-pointer'>Peliculas</Link>
          <Link to='/salas' className='text-white font-bold text-lg w-full p-2 hover:bg-blue-700 cursor-pointer'>Salas</Link>
          <Link to='/funciones' className='text-white font-bold text-lg w-full p-2 hover:bg-blue-700 cursor-pointer'>Cartelera</Link>
          {/* <Link to='/reservas' className='text-white font-bold text-lg w-full p-2 hover:bg-blue-700 cursor-pointer'>Reservaciones</Link> */}
            
        </div>

        <div className='flex justify-center mt-3'>
        <button onClick={logout}
          className="bg-red-500 rounded-md p-3 text-white font-semibold hover:bg-red-600">
          Cerrar sesión
        </button>
        </div>
        

    </div>
  )
}
