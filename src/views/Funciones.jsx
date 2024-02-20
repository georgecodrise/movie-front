import { useEffect, useRef, useState } from 'react'
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

  const {cartelera,getCartelera,onDeleteCarteleraID,modal,onClickModal,onEstadoCartelera} = useApp();

  const [idCartelera,setIdCartelera] =useState('');
 
  
  const idMovie = (value) =>{
    setIdCartelera(value)
  }
  
  const [state,setState] = useState(false)
  
  
  const onChangeEstado =(id)=>{

    onEstadoCartelera(id)
    //setState(!state)
    //console.log(state);
    
  }

  const onDeleteMovieID=(id)=>{
    onDeleteCarteleraID(id);
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
                      className='bg-green-500 p-2 text-white font-semibold rounded-lg w-full'>Editar</button>
              <button onClick={()=>{onDeleteMovieID(cartelera.id)}}
                      className='bg-red-500 p-2 text-white font-semibold rounded-lg w-full'>Eliminar</button>
              </div>
        
             
              <div className='mt-2'>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" onChange={()=>{onChangeEstado(cartelera.id)}} />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ms-3 font-semibold text-gray-900">{cartelera.estado ? 'Activo' : 'Desactivo' }</span>
              </label>
              </div>
                {/* <div>
                  checked={onEstado} onChange={onEstado}
                  <input type="text" onClick={()=>{onEstado(cartelera.estado)}}  checked={onEstado}/>
                  {cartelera.estado}
                </div> */}
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
