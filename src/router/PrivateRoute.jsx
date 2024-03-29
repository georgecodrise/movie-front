import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({children}) =>{

    const {logged} = useContext( AuthContext);

    console.log({logged});

    return (logged) ? children : <Navigate to='/auth/login'/>
}