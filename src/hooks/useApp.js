import { useEffect, useState } from "react";
import { apiBackend } from "../api/api";


export const useApp = () => {

    const [movie,setMovie] = useState([])
    const token = localStorage.getItem('token')
  
    const getUser = async() =>{
    
        try {
            const data = await apiBackend.get('/user',{
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            });
            setUser({data});
            console.log(data);
    
        } catch (error) {
            console.log(error);
        }
        
    }

    const onNewMovie = async(datos)=>{
        try {
            const {data} = await apiBackend.post('/movies',datos)
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    const getMovie = async()=>{
        try {
            const data = await apiBackend.get('/movies')
            setMovie(data.data)
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( ()=>{
       getMovie();
    },[] )

    return {
        onNewMovie,
        movie,
    }
}
