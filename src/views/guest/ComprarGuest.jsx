import React from 'react'
import { useApp } from '../../hooks/useApp'
import { useParams } from 'react-router-dom';

export default function ComprarGuest() {

    const {selectMovie,setSelectMovie} = useApp();

    const {id} = useParams();

    console.log(selectMovie);
    console.log(id);


  return (
    <div>
        ComprarGuest
    
        <div>
            {selectMovie.map(movie=>
                <p>{movie.hora}</p>
            )}
        </div>

    </div>

  )
}
