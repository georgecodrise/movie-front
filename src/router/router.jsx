import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Peliculas from "../views/Peliculas";
import Salas from "../views/Salas";
import Reservaciones from "../views/Reservaciones";
import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../views/Login";
import Register from "../views/Register";
import { PrivateRoute } from "./PrivateRoute";
import Funciones from "../views/Funciones";
import NewFuncion from "../views/NewFuncion";
import GuestLayout from "../layout/GuestLayout";
import CarteleraGuest from "../views/guest/CarteleraGuest";
import ComprarGuest from "../views/guest/ComprarGuest";


export const router = createBrowserRouter([

    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Peliculas/>
            },
            {
                path:'/salas',
                element:<Salas/>
            },
            {
                path:'/funciones',
                element:<Funciones/>,
            },
            {
                path:'/funciones/new',
                element:<NewFuncion/>
            },
            {
                path:'/reservas',
                element:<Reservaciones/>
            },
            
        ]
    },
    {
        path:'/guest',
        element:<GuestLayout/>,
        children:[
            {
                index:true,
                element:<CarteleraGuest/>
            },
            {
                path:'/guest/comprar/:id',
                element:<ComprarGuest/>
            }
        ]
    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element:<Login/>
            },
            {
                path:'/auth/register',
                element:<Register/>        
            }
        ]
    }

])
