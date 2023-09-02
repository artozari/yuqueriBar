import React, { useState } from 'react'
import "../styles/buscador.css"

export default function Buscador({buscar}) {
  const [producto, setProducto] = useState("")
  
  const cambiarValProd = (e) => {
    setProducto(e.target.value)
  }
  return (
    <div className='buscador'>
        <input type="text" name="producto" id="productoId" onChange={cambiarValProd} />
        <button name="btnBuscar" onClick={() => {buscar(producto)}} >Buscar</button>
    </div>
  )
}