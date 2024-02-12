import { useContext, useEffect } from "react";
import { apiBackend } from "../api/api"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {

const { onLogin, onLogout } =useContext(AuthContext);
const navigate = useNavigate();

const register = async(datos) =>{
    
    try {
        const data = await apiBackend.post('/register',datos);
        console.log(data);

    } catch (error) {
        console.log(error);
    }
    
}

const login = async(datos) =>{
    
    try {
        const {data} = await apiBackend.post('/login',datos);
        localStorage.setItem('token',data.token)
        console.log(data);
        onLogin(data.user.name);
        navigate('/');
        

    } catch (error) {
        console.log(error);
    }
}

const logout = ()=>{

    onLogout();
    navigate('/auth/login');

}

useEffect(() => {
    console.log('useEffect load!');
  },[] )


return {
    register,
    login,
    logout
  }
}
