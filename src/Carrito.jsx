import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "./components/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"

export const Carrito = () => {
  return (
    <>
<Navbar></Navbar>
<div className="container">

    <Routes>
        
    <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
    <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
        <Route path="/" element={<Navigate to="/"/>}></Route>
    </Routes>
</div>
    </>
  )
}
