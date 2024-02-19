import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../hooks/useApp'
import { useForm } from 'react-hook-form';

export default function NewFuncion() {

  // const { register, handleSubmit, formState: { errors }} = useForm();

  // const onSubmitForm = (data) => {
  //   console.log(data);
    
  // }

  const {movie,getMovie, sala, getSala, onNewCartelera} = useApp();

  const movieRef = useRef();
  const salaRef = useRef();
  const inicioRef = useRef();
  const finRef = useRef();

  const onSubmit = (e)=>{
    e.preventDefault();

    const datos={
      movie: movieRef.current.value,
      sala: salaRef.current.value,
      inicio: inicioRef.current.value,
      fin: finRef.current.value
    }

    console.log(datos);
    onNewCartelera(datos)
  }

  useEffect( ()=>{
      getMovie();
      getSala();
  },[] )

  return (
    <div className='p-3'>
      <p className='text-4xl font-semibold'>Nueva Función</p>

      <div className="mt-3">        
        
        <Link to='/funciones' className='bg-blue-500 rounded-md text-white font-semibold p-3 w-fit hover:bg-blue-600 flex items-center gap-2'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>
        Volver </Link>       

        <form>

        <div className='mt-5'>
          <div className="col-span-2 sm:col-span-1">
            
            <label htmlFor="movie"
              className="block mb-2 text-xl font-medium text-gray-900">Película</label>
            <select
              ref={movieRef}
              name="movie"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-fit p-2.5"
              required
            >
              <option value="">--Selecciona película--</option>
              {movie.map(movie =>
                <option key={movie.id} value={movie.id}>{movie.name}</option>
              )}

            </select>
          </div>
        </div>

        <div className='mt-5'>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="movie"
              className="block mb-2 text-xl font-medium text-gray-900">Sala</label>
            <select
              ref={salaRef}
              id="movie"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-fit p-2.5"
            >
              <option defaultValue="">--Selecciona sala--</option>
              {sala.map(sala =>
                <option key={sala.id} value={sala.id}>{sala.name}</option>
              )}

            </select>
          </div>
        </div>

        <div className='mt-5 flex gap-3'>
        <div className="col-span-2 sm:col-span-1">
            <label htmlFor="fecha"
              className="block mb-2 text-xl font-medium text-gray-900">Inicio</label>
            <input type="datetime-local" name="date" id="date" ref={inicioRef} 
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                   required
            />
            
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="fecha"
              className="block mb-2 text-xl font-medium text-gray-900">Fin</label>
            <input type="datetime-local" name="date" id="date" ref={finRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"/>
          </div>
        </div>

        
        <div className='mt-3'>
          <button onClick={onSubmit} className='bg-blue-500 rounded-lg text-white font-semibold p-3'>Guardar</button>
        </div>
        </form>
       

        </div>


    </div>

  
  )
}
