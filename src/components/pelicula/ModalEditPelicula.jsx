import { useForm } from 'react-hook-form';
import { useApp } from '../../hooks/useApp';
import { useEffect } from 'react';

export default function ModalEditPelicula({idMovie}) {

    const {register,handleSubmit} = useForm();
    const {selectMovie,selectedMovie,movie,getMovie,sala, getSala} = useApp();

    const onSubmitForm =(data)=>{
        onNewMovie(data);
        console.log(data);
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

    console.log(selectMovie);

  return (
    <div className='mt-3'>

        {selectMovie.map( select=>
            
           <>
            <p>Película</p>

            <select name="" id="" className='p-2 rounded-lg border w-full' {...register("genre",{required:true})}>
                <option value={select.movie_id}>{select.pelicula}</option>
                {movie.map( movies =>
                    <>
                    <option value={movies.id}>{movies.name}</option>
                    </>
                )}
            </select>

            <p>Sala</p>
            <select name="" id="" className='p-2 rounded-lg border w-full' {...register("genre",{required:true})}>
                <option value={select.sala_id}>{select.sala}</option>
                {sala.map(sala=>
                    <>
                    <option value={sala.id}>{sala.name}</option>
                    </>
                )}    
            </select>

           </>
                
           )}   
        <form>   

            <p>Inicio</p>
            <input type="datetime-local"
                   placeholder='Año' 
                   className='p-2 rounded-lg border w-full'
                    
                   {...register("year",{required:true})}/>
            
            <p>Fin</p>
            <input type="datetime-local" 
                   placeholder='Año' 
                   className='p-2 rounded-lg border w-full'
                   
                   {...register("year",{required:true})}/>
        </form>
        <button onClick={handleSubmit(onSubmitForm)}
                className='bg-blue-600 text-white font-semibold p-2.5 mt-3 rounded-lg'>Guardar</button>

          
    </div>
  )
}
