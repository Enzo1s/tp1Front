import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Inicio from '../view/Inicio'
import Home from '../view/Home/Home'
import Detalle from '../view/Detalle'
import Buscador from '../view/Search/Buscador'
import FormNoticia from '../view/Forms/FormNoticia'
import FormEmpresa from '../view/Forms/FormEmpresa'

const Router = () => {
  
  const [empresa, setEmpresa] = useState(null)

  const saveEmpresa = (empresa) => {
    setEmpresa(empresa)
    localStorage.setItem('empresa', JSON.stringify(empresa))
  }
  return (
    <Routes>
      <Route path="/" element={<Inicio setEmpresa={saveEmpresa}/>} />
      <Route path="*" element={<Inicio setEmpresa={saveEmpresa}/>} />
      <Route path="/home/:id" element={<Home empresa={empresa} setEmpresa={setEmpresa}/>} />
      <Route path='/detalle/:id' element={<Detalle empresa={empresa} setEmpresa={setEmpresa}/>} />
      <Route path='/buscador' element={<Buscador empresa={empresa} setEmpresa={setEmpresa}/>} />
      <Route path='/noticia/crear' element={<FormNoticia empresa={empresa} setEmpresa={setEmpresa}/>} />
      <Route path='/empresa/crear' element={<FormEmpresa />} />
    </Routes>
  )
}

export default Router