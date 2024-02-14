import { useEffect, useState } from "react";
import { apiBackend } from "../api/api";
import { toast } from "react-toastify";


export const useApp = () => {

    const [user,setUser] = useState([]);
    const [movie,setMovie] = useState([]);
    const [sala,setSala] = useState([]);
    const [cartelera, setCartelera] = useState([]);
    const [selectMovie, setSelectMovie] = useState([]);
    const [modal,setModal] = useState(false);
    const [errorCartelera, setErrorCartelera] = useState([])

    

    const token = localStorage.getItem('token')

    const onClickModal = () =>{
        setModal(!modal);
        setErrorCartelera([])
    }
  
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

    const getMovie = async ()=>{
        try {
            const data = await apiBackend.get('/movies-all')
            setMovie(data.data)
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getSala = async ()=>{
        try {
            const data = await apiBackend.get('/salas')
            console.log(data.data);
            setSala(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const getCartelera = async ()=>{
        try {
            const data = await apiBackend.get('/cartelera')
            console.log(data.data);
            setCartelera(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const onNewCartelera = async (datos) =>{
        try {
            const {data} = await apiBackend.post('/cartelera',datos)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const selectedMovie = async(id)=>{
        try {
            const data =  await apiBackend.get(`/cartelera/${id}`)
            setSelectMovie(data.data)
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const onCartelera = async (datos) =>{
        try {
            const {data} =  await apiBackend.post('/reservas',datos);
            console.log(data);
            setErrorCartelera([]);
            toast.success('Asientos Reservados!');
            //onClickModal();
        } catch (error) {
            console.log(error.response.data.errors);
            setErrorCartelera(error.response.data.errors)
        }
    }

    const notify1 = () =>toast.error( errorCartelera[0] );
    const notify2 = () =>toast.error( errorCartelera[1] );

    useEffect( ()=>{
        notify1();
        notify2();
    },[errorCartelera])

    return {
        onNewMovie,
        getMovie,
        movie,
        user,
        getSala,
        sala,
        cartelera,
        getCartelera,
        onNewCartelera,
        selectMovie,
        selectedMovie,
        onClickModal,
        modal,
        onCartelera,
        errorCartelera,
    }
}
