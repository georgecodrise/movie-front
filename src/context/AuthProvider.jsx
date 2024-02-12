import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";
import { useAuth } from "../hooks/useAuth";

const initialState = {
    loggin:false,
}

const init = () =>{
    const token = localStorage.getItem('token');

    return{
        logged: !!token,
        token:token,
    }
}

export const AuthProvider = ( ({children}) => {

    const token = localStorage.getItem('token')

   const [authState,dispatch] = useReducer(authReducer,initialState, init);
   
   const onLogin = async(name)=>{

    const action = {
        type: types.login,
        payload:{
            name:name,
            token:token,
        }
    }

    dispatch(action);

   }

   const onLogout = ( )=>{
    
    localStorage.removeItem('token');

    const action={
        type: types.logout,

    }
    
    dispatch(action)

   }


    return(
        <AuthContext.Provider value={{
            authState,
            onLogin: onLogin,
            onLogout: onLogout
        }}>
            {children}
        </AuthContext.Provider>
    );
})