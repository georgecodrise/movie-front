import { Outlet } from "react-router-dom";
import { useApp } from "../hooks/useApp";
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export default function GuestLayout() {

  const {errorCartelera} = useApp();

  console.log(errorCartelera);

  return (
    <>
    <div className="mx-14 my-12 p-5 bg-white rounded-lg shadow-lg">
        <Outlet/>

    </div>

    <ToastContainer />
    
    </>
  )
}
