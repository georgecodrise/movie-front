import React from 'react'
import { useApp } from '../hooks/useApp';

export default function TablaPeliculas() {

    const {movie} = useApp();

  return (
    <>
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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

            {movie.map(movie=>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {movie.name}
                </th>
                <td className="px-6 py-4">
                    {movie.genre}
                </td>
                <td className="px-6 py-4">
                    {movie.year}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            )}
            
        </tbody>
    </table>
</div>

    </>
  )
}
