import { useRef } from "react";
import { useApp } from "../hooks/useApp";


export default function ModalPelicula() {
    
    const {onNewMovie} = useApp();

    const nameRef = useRef();
    const genreRef = useRef();
    const yearRef = useRef();
    
    const onSubmit = (e) =>{
      e.preventDefault();
      
      const datos = {
        name:nameRef.current.value,
        genre:genreRef.current.value,
        year:yearRef.current.value,
      }
  
      console.log(datos)
      onNewMovie(datos)
  
    }

    return (
        <>
            <div>
                <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg px-5 py-2.5 text-center" type="button">
                    + Nuevo
                </button>
            </div>

            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">

                    <div className="relative bg-white rounded-lg shadow">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Nueva Pelicula
                            </h3>
                            <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Cerrar</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5">
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Título Película</label>
                                    <input type="text" name="name" id="name" ref={nameRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Título" required />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="genre"
                                        className="block mb-2 text-sm font-medium text-gray-900">Género</label>
                                    <select
                                        id="genre"
                                        ref={genreRef}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    >
                                        <option defaultValue="">Selecciona categoria</option>
                                        <option value="Comedia">Comedia</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Acción">Acción</option>
                                        <option value="Terror">Terror</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="year"
                                       
                                        className="block mb-2 text-sm font-medium text-gray-900">Año</label>
                                    <input type="text" name="year" id="year"
                                        ref={yearRef}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    />
                                </div>
                                <button onClick={onSubmit}
                                    type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">+ Añadir Película</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
