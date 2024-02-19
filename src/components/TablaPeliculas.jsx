import React, { useEffect, useState } from 'react'
import { useApp } from '../hooks/useApp';
import { apiBackend } from '../api/api';
import useSWR from 'swr';

export default function TablaPeliculas() {

    const[page,setPage] = useState(1);

    const handleNextPage = () =>{
        //console.log(page);
        setPage(page + 1);
      }
    
      const handlePreviousPage = () =>{
        //console.log(page);
        setPage(page - 1);
      }
    
      const fetcher = (page)=> apiBackend.get(`/movies?page=${page}`).then(data=>data.data);
      const {data} = useSWR(page,fetcher);

      console.log(data);


    return (
        <>
        <div>
            <div className="relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Título
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Género
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Año
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.map(data =>
                            <tr key={data.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data.name}
                                </th>
                                <td className="px-6 py-4">
                                    {data.genre}
                                </td>
                                <td className="px-6 py-4">
                                    {data.year}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
            </div>

            <div className='flex justify-between mt-2'>Mostrando:{data?.from} - {data?.to}
            <div className='flex gap-3'>
                <button disabled={ !data?.prev_page_url ? true : false}
                        onClick={handlePreviousPage}
                        className='bg-blue-500 text-white font-semibold p-2 rounded-md'>Atrás</button>
                <button onClick={handleNextPage} 
                        disabled={ !data?.next_page_url ? true : false }
                        className='bg-blue-500 text-white font-semibold p-2 rounded-md'>Siguiente</button>
            </div>
                
            </div>
        </>
    )
}
