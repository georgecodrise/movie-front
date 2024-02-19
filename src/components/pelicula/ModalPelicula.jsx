import { useRef } from 'react'
import { useApp } from '../../hooks/useApp';
import { useForm } from 'react-hook-form';


export default function ModalPelicula() {

 const {onNewMovie} = useApp();
 const {register,handleSubmit} = useForm();
 
 const onSubmitForm =(data)=>{
    onNewMovie(data);
    console.log(data);
}

 const nameRef = useRef();  
 const genreRef = useRef();
 const yearRef = useRef();



  return (
    <div className='mt-3'>
        <form>          
           <p>Título</p>
            <input type="text" 
                   placeholder='nombre' 
                   className='p-2 rounded-lg border w-full'
                   ref={nameRef} 
                   {...register("name",{required:true})}/>
            
            <p>Género</p>
            <select name="" id="" 
                    className='p-2 rounded-lg border w-full'
                    {...register("genre",{required:true})}>
                <option value="">--Seleccione una opción--</option>
                <option value="acción">Acción</option>
                <option value="terror">Terror</option>
                <option value="romance">Romance</option>
                <option value="comedia">Comedia</option>
            </select>

            <p>Año</p>
            <input type="text" 
                   placeholder='Año' 
                   className='p-2 rounded-lg border w-full'
                   ref={yearRef} 
                   {...register("year",{required:true})}/>
        </form>
        <button onClick={handleSubmit(onSubmitForm)}
                className='bg-blue-600 text-white font-semibold p-2.5 mt-3 rounded-lg'>Guardar</button>

          
    </div>
  )
}
