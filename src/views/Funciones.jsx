import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useApp } from '../hooks/useApp'
import moment from 'moment';
import Modal from 'react-modal';
import ModalEditPelicula from '../components/pelicula/ModalEditPelicula';

const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      
    },
};

Modal.setAppElement('#root');

export default function Funciones() {

  const {cartelera,getCartelera,onDeleteCarteleraID,modal,onClickModal} = useApp();

  const [idCartelera,setIdCartelera] =useState('');

  const idMovie = (id) =>{
    setIdCartelera(id)
  }

  const onDeleteMovieID=(id)=>{
   /*
   TODO: Eliminar función
   */
    onDeleteCarteleraID(id);
    console.log(id)
  }

  const onEditMovieID=(id)=>{

    /*
    TODO: editar funcion
     */
    
    console.log(id);
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

        <div className='flex justify-center lg:justify-start mt-3'>

          <div className='h-fit grid grid-cols-1 gap-4 items-center
                          md:grid-cols-3
                          lg:grid-cols-4
                          xl:grid-cols-6
                          2xl:grid-cols-9'>
          {cartelera.map(cartelera=>
            <div className='h-fit rounded-lg border p-3' key={cartelera.id}>
              <p className='font-semibold'>{cartelera.sala}</p>
              <p>{cartelera.pelicula}</p>
              <p className='text-sm'>{moment(cartelera.inicio).format('lll')}</p>

              <div className='flex gap-3 mt-3'>
              <button onClick={()=>{onClickModal(),idMovie(cartelera.id)}}
                      className='bg-green-500 p-2 text-white font-semibold rounded-lg'>Editar</button>
              <button onClick={()=>{onDeleteMovieID(cartelera.id)}}
                      className='bg-red-500 p-2 text-white font-semibold rounded-lg'>Eliminar</button>
              </div>
              
            </div>
          )}
          </div>
          

        </div>

        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <div>
          <div className='flex justify-between'>
          <p className='text-2xl font-semibold'>Editar Pelicula</p>
          <button onClick={onClickModal}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          </button>
          </div>

          <ModalEditPelicula idMovie={idCartelera}/>

          </div>
        </Modal>

      </div>

    </div>
  )
}
