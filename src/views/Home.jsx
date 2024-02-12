import ModalRegistro from "../components/ModalRegistro";
import TablaUsuario from "../components/TablaUsuario";
import { useAuth } from "../hooks/useAuth"


export default function Home() {

  const { logout } = useAuth();

  

  return (
    <div className="p-3">
      <div className="flex justify-between">
        <p className="text-4xl font-semibold">Usuarios</p>
        <button onClick={logout}
          className="bg-red-500 rounded-md p-3 text-white font-semibold hover:bg-red-600">
          Cerrar sesión
        </button>
      </div>

      <div className="mt-3">
        
        <ModalRegistro/>

        <TablaUsuario/>

      </div>



    </div>
  )
}
