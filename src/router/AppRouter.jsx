import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Layout from "../layout/Layout";


export const AppRouter = () => {
  return (
    
    <>
        <Routes>
            <Route path='/auth'
                   element={AuthLayout}

            />

            <Route path='/'
                   element={Layout}
                   
            />
        </Routes>
    </>

  )
}
