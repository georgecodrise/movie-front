import { Outlet } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";

export default function AuthLayout() {
  return (
    <>
      <div className="bg-background h-screen w-screen flex justify-center items-center">
        <Outlet/> 
      </div>
    </>
  )
}
