import { Outlet } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";

export default function AuthLayout() {
  return (
    <>
        <div className="bg-white shadow-lg rounded-lg mx-52 my-28 p-5">
            <Outlet></Outlet>
        </div>
    </>
  )
}
