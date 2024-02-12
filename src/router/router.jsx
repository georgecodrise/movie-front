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


export const router = createBrowserRouter([

    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/peliculas',
                element:<Peliculas/>
            },
            {
                path:'/salas',
                element:<Salas/>
            },
            {
                path:'/reservas',
                element:<Reservaciones/>
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
