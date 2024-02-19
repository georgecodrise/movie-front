import React from 'react'
import ModalPelicula from '../components/pelicula/ModalPelicula'
import { useApp } from '../hooks/useApp'
import TablaPeliculas from '../components/TablaPeliculas'
import Modal from 'react-modal';

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


export default function Peliculas() {


 const {modal,onClickModal} = useApp();


  return (
    <div className="p-3">
      <p className="text-4xl font-semibold">Peliculas</p>

      <div className="mt-3">

        <button  onClick={onClickModal}
                className='bg-blue-600 text-white font-semibold p-2.5 rounded-lg'>+ Nuevo</button>
        <Modal
        isOpen={modal}
        style={customStyles}
        >
          <div>
          <div className='flex justify-between'>
          <p className='text-2xl font-semibold'>Agregar Pelicula</p>
          <button onClick={onClickModal}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          </button>
          </div>

          <ModalPelicula/>

          </div>
        </Modal>


        <div className='mt-3'>
         <TablaPeliculas/>
        </div>

      </div>

      

      
    </div>
  )
}
