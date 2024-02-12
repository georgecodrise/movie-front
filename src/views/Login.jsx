import { useEffect } from "react";
import { useForm } from "../hooks/useForm"


export default function Login() {

    const {formState, onInputChange} = useForm({
        email:'',
        password:'',
    });

    const {email,password} = formState

    useEffect(() => {
        console.log('username changed!');
      }, [email])

  return (
    
    <>
        <div>
            <div className="text-4xl font-semibold ">Login</div>

            <form action="">
            <div className="mt-2">
                <p>Email</p>
                <input type="email"
                       name="email"
                       onChange={onInputChange}
                       value={email}
                       className="rounded p-1.5 border" />
            </div>
            <div className="mt-2">
                <p>Contraseña</p>
                <input type="password" 
                       name="password"
                       onChange={onInputChange}
                       value={password}
                       className="rounded p-1.5 border" />
            </div>
            <div className="mt-3">
                <button className="bg-blue-500 rounded-lg text-white font-semibold p-3">Entrar</button>
            </div>
            </form>
        </div>
    </>

  )
}
