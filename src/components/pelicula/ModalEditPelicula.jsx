import { useForm } from 'react-hook-form';
import { useApp } from '../../hooks/useApp';
import { useEffect, useRef } from 'react';

export default function ModalEditPelicula({idMovie}) {

    const {register,handleSubmit} = useForm();
    const {selectMovie,selectedMovie,movie,getMovie,sala, getSala,onEditCarteleraID} = useApp();

    const peliculaRef = useRef();
    const idRef = useRef();  
    const salaRef = useRef();
    const inicioRef = useRef();
    const finRef = useRef();


    const onSubmitForm = (e)=>{
        
        e.preventDefault();

        const id =  idRef.current.value;

        const datos={
            pelicula: peliculaRef.current.value,
            sala: salaRef.current.value,
            inicio: inicioRef.current.value,
            fin: finRef.current.value
        }

        onEditCarteleraID(datos,id);
        console.log(datos,id);
    }

    //console.log(idMovie);

    useEffect( ()=>{
        selectedMovie(idMovie);
    },[] )

    useEffect( ()=>{
        getMovie();
    },[] )

    useEffect( ()=>{
        getSala();
    },[] )

    //console.log(selectMovie);

  return (
    <div className='mt-3'>
        <form>
        {selectMovie.map( select=>
            
           <>

            <input type="number" value={select.id} ref={idRef} hidden/>

            <p>Película</p>

            <select className='p-2 rounded-lg border w-full' ref={peliculaRef}>
                <option value={select.movie_id}>{select.pelicula}</option>
                {movie.map( movies =>
                    <>
                    <option value={movies.id}>{movies.name}</option>
                    </>
                )}
            </select>

            <p>Sala</p>
            <select className='p-2 rounded-lg border w-full' ref={salaRef}>
                <option value={select.sala_id}>{select.sala}</option>
                {sala.map(salas=>
                    <>
                    <option value={salas.id}>{salas.name}</option>
                    </>
                )}    
            </select>

            <p>Inicio</p>
            <input type="datetime-local"
                   placeholder='Año' 
                   className='p-2 rounded-lg border w-full'
                   defaultValue={select.inicio}
                    ref={inicioRef}
                   />
            
            <p>Fin</p>
            <input type="datetime-local" 
                   placeholder='Año' 
                   className='p-2 rounded-lg border w-full'
                   defaultValue={select.fin}
                   ref={finRef}
                   />

            
                <button onClick={ onSubmitForm}
                className='bg-blue-600 text-white font-semibold p-2.5 mt-3 rounded-lg'>Guardar</button>
           </>
                
           )}   

        </form>
        

          
    </div>
  )
}
