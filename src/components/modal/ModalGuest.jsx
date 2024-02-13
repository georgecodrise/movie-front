import React, { useState } from 'react'
import { useApp } from '../../hooks/useApp'


export default function ModalGuest(){

  const {selectMovie,selectedMovie} = useApp();

  console.log(selectMovie);

  return (
    <div>
        <h2 >Hello</h2>
        <button>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </div>
  )
}
