import { useEffect, useState } from 'react'
import { useApp } from '../../hooks/useApp';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import ModalGuest from "../../components/modal/ModalGuest";


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

export default function CarteleraGuest() {

  const {cartelera,getCartelera,selectedMovie,onClickModal,modal,selectMovie} = useApp();

  const [counter, setCounter] = useState(1)

  console.log(modal);  
  console.log(selectMovie);  

  const onMovieID=(id)=>{
    selectedMovie(id)
  }

  const increment= () =>{
    setCounter(counter+1)
  }

  const decrement=()=>{
    setCounter(counter-1)
  }

   useEffect( ()=>{
       getCartelera();
   },[] )

  return (
    <div className='flex flex-col'>

       <div>
           <p className='text-5xl font-semibold'>Cartelera</p>
       </div>

       <div>

       <div className='grid grid-cols-4 gap-4 mt-5'>
          {cartelera.map(cartelera=>
            <div className='rounded-lg border p-3' key={cartelera.id}>
              <p>{cartelera.pelicula}</p>
              <p>{cartelera.sala}</p>
              <p>{cartelera.fecha}</p>
              <p>{cartelera.hora}</p>

              <div className='flex gap-3 mt-3'>
                <button onClick={()=>{onClickModal(),onMovieID(cartelera.id)}}>Ver</button>
              </div>
              
            </div>
          )}
          </div>

       </div>

       <Modal isOpen={modal} style={customStyles}>
            <div className='flex flex-col p-3'>
                <div className='flex justify-between'>
                    <p className='text-3xl font-semibold'>Reservar</p>
                    <button onClick={()=>{onClickModal(), setCounter(1)}}>X</button>
                </div>

                {selectMovie.map(movie=>
                    <div className='py-2'>
                        Pelicula:<p className='font-semibold'>{movie.pelicula}</p>
                        Sala:<p className='font-semibold'>{movie.sala}</p>
                        Fecha-Hora:<p className='font-semibold'>{movie.fecha}-{movie.hora}</p>
                    </div>
                )}

                <div className=''>
                    Entradas:
                    <div>
                        <button onClick={decrement}>-</button>
                            {counter}
                        <button onClick={increment}>+</button>
                    </div>
                </div>

                <button className='mt-3 bg-blue-500 rounded-md text-white font-semibold p-2 hover:bg-blue-600'>
                    Reservar
                </button>
            </div>
       </Modal>


    </div>
  )
}
