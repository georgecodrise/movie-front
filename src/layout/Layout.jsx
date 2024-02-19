import { Outlet } from "react-router-dom";
import { PrivateRoute } from "../router/PrivateRoute";
import Sidebar from "../components/Sidebar";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Layout() {
  return (

    <>
    <PrivateRoute>
      <div className="h-screen md:flex xl:flex">

        <div className="bg-blue-600 shadow-md p-2 rounded-md 
                          md:w-1/3 md:p-2 
                          lg:w-1/5 lg:p-2
                          xl:w-[250px] xl:p-2">
          <Sidebar/>
        </div>

        <div className="bg-white shadow-md rounded-md
                          md:h-screen md:w-full md:overflow-y-auto 
                          lg:h-screen lg:overflow-y-auto
                          xl:h-screen xl:overflow-y-auto xl:w-full">
          <Outlet/>
        </div>

      </div>

      <ToastContainer />

      </PrivateRoute>
    </>

    

  )
}
 