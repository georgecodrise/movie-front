import React, { useEffect } from 'react'
import { useApp } from '../../hooks/useApp';

export default function TablaSala() {

    const {sala,getSala} = useApp();
 
    useEffect(() => {
        getSala();
    }, [])

  return (
    <>
        <div>
            <div className="w-fit relative shadow-md sm:rounded-lg">
                <table className="w-96 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sala
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {sala?.map(data =>
                            <tr key={data.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {data.name}
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
            </div>

            {/* <div className='flex justify-between mt-2'>Mostrando:{data?.from} - {data?.to}
            <div className='flex gap-3'>
                <button disabled={ !data?.prev_page_url ? true : false }
                        onClick={handlePreviousPage}
                        className='bg-blue-500 text-white font-semibold p-2 rounded-md'>Atrás</button>
                <button onClick={handleNextPage} 
                        disabled={ !data?.next_page_url ? true : false }
                        className='bg-blue-500 text-white font-semibold p-2 rounded-md'>Siguiente</button>
            </div>
                
            </div> */}
        </>
  )
}
