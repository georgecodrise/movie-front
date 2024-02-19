import { useEffect, useRef, useState } from 'react'
import { useApp } from '../../hooks/useApp';
import Modal from 'react-modal';
import moment from 'moment';
import 'moment/dist/locale/es-us';



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
          onCartelera} = useApp();

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
    <div className='p-10'>

       <div>
           <p className='text-5xl text-white font-semibold'>Cartelera</p>
       </div>

       <div>

       <div className='grid grid-cols-1 gap-4 mt-5 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          {cartelera.map(cartelera=>
            <div className='bg-white shadow-lg rounded-lg border p-3' key={cartelera.id}>
              <p>{cartelera.pelicula}</p>
              <p>{cartelera.sala}</p>
              <p className='capitalize' >{moment(cartelera.inicio).format('ddd D, h:mm A')}</p>
              <p>Asientos disponibles: {cartelera.disponibles}</p>
              

              <div className='flex justify-center gap-3 mt-3'>
                <button onClick={()=>{onClickModal(),onMovieID(cartelera.id)}} 
                        className='flex gap-2 bg-black rounded-lg p-2 text-white font-semibold'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  Ver
                </button>
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
                        Fecha:<p className='font-semibold'>{moment(cartelera.inicio).format('ddd D, h:mm A')}</p>
                    </div>
                )}

                <div className=''>
                    Entradas:
                    <div className='flex items-center gap-3'>
                        <button onClick={decrement} className='bg-black rounded-md p-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="white" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                          </svg>
                        </button>
                            <input className='font-semibold bg-white w-4' ref={cantTicketRef} value={counter} disabled/>
                        <button onClick={increment} className='bg-black rounded-md p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="white" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>
                    </div>
                </div>

                <button onClick={onSubmit}
                        className='mt-3 bg-black rounded-md text-white font-semibold p-2'>
                    Reservar
                </button>               
            </div>
       </Modal>

    </div>
  )
}
