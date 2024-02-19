import { useEffect, useRef } from "react";
import { useAuth } from "../hooks/useAuth";


export default function Register() {

  const {register} =useAuth();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  
  const onSubmit = (e) =>{
    e.preventDefault();
    
    const datos = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
  
    }

    console.log(datos)

    register(datos);

  }


  useEffect(() => {
    console.log('username changed!');
  }, [])

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-5 md:w-72">
        <div className="text-4xl font-semibold ">Registro</div>

        <form action="">
          <div className="mt-2">
            <p>Nombres</p>
            <input type="text"
              name="user"
              ref={nameRef}
              className="rounded p-1.5 border" />
          </div>
          <div className="mt-2">
            <p>Email</p>
            <input type="email"
              name="email"
              ref={emailRef}
              className="rounded p-1.5 border" />
          </div>
          <div className="mt-2">
            <p>Contraseña</p>
            <input type="password"
              name="password"
              ref={passwordRef}
              className="rounded p-1.5 border" />
          </div>
          <div className="mt-3">
            <button onClick={onSubmit}
                    className="bg-blue-500 rounded-lg text-white font-semibold p-3">Entrar</button>
          </div>
        </form>
      </div>
    </>
  )
}
