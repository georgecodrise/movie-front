import { Outlet } from "react-router-dom";
import { PrivateRoute } from "../router/PrivateRoute";
import Sidebar from "../components/Sidebar";


export default function Layout() {
  return (

    <>
      <div className="flex ">

        <div className="bg-blue-600 shadow-md rounded-md w-1/6 h-screen">
          <Sidebar/>
        </div>

        <div className="bg-white shadow-md rounded-md w-5/6 h-screen">
          <Outlet/>
        </div>

      </div>
    </>

    

  )
}
 