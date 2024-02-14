import { useEffect, useRef, useState } from 'react'
import { useApp } from '../../hooks/useApp';
import Modal from 'react-modal';
import { toast, ToastContainer } from 'react-toastify';

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

  const {cartelera,
          getCartelera,
          selectedMovie,
          onClickModal,
          modal,
          selectMovie,
          onCartelera,
          errorCartelera,
          notify} = useApp();

  const [counter, setCounter] = useState(1)
  const idRef = useRef();
  const cantTicketRef = useRef();


  const onSubmit =()=>{

    try {
    
      const datos={
        id: idRef.current.value,
        cantTicket: cantTicketRef.current.value,
      }

      console.log(datos);
      onCartelera(datos);

    } catch (error) {
      console.log(error);
    }
    
  }

  const onMovieID=(id)=>{
    selectedMovie(id)
  }

  const increment= () =>{
    setCounter(counter+1)
  }

  const decrement=()=>{
    if(counter===0){ return }
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
            <div className='flex flex-col w-56'>
                <div className='flex justify-between'>
                    <p className='text-3xl font-semibold'>Reservar</p>
                    <button onClick={()=>{onClickModal(), setCounter(1)}}>X</button>
                </div>

                {selectMovie.map(movie=>
                    <div className='py-2' key={movie.id}>
                        <input className='font-semibold bg-white' ref={idRef} defaultValue={movie.id}  hidden/>                    
                        Pelicula: <p className='font-semibold'>{movie.pelicula}</p>
                        Sala:<p className='font-semibold'>{movie.sala}</p>
                        Fecha:<p className='font-semibold'>{movie.fecha}</p>
                        Hora:<p className='font-semibold'>{movie.hora}</p>
                    </div>
                )}

                <div className=''>
                    Entradas:
                    <div className='flex items-center gap-3'>
                        <button onClick={decrement} className='bg-blue-500 rounded-md p-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="white" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                          </svg>
                        </button>
                            <input className='font-semibold bg-white w-4' ref={cantTicketRef} value={counter} disabled/>
                        <button onClick={increment} className='bg-blue-500 rounded-md p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="white" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>
                    </div>
                </div>

                <button onClick={onSubmit}
                        className='mt-3 bg-blue-500 rounded-md text-white font-semibold p-2 hover:bg-blue-600'>
                    Reservar
                </button>               
            </div>
       </Modal>

    </div>
  )
}
