// import React, { useState } from 'react'
import jsonBar from "../../barYuqueri.json"
import "../../styles/menu.css"

const Menu = () => {
  return (
    <div className="menu">
    {Object.keys(jsonBar).map(valor => (
    <div key={valor.id} className="categorias">
      <h3 >{valor.toUpperCase()}</h3>
        <ul key={valor.id}>
        {jsonBar[valor].map(objeto => (
          <li key={objeto.id}>
            <div>{objeto.nombre}</div>
            <div>{objeto.precio}</div>
          </li> 
        ))}
      </ul>
    </div>
  ))}
</div>

  )
}
// {Object.values(jsonBar).map(item => (
//         <ul key={Math.random()}>
//           {item.map(bebida => (
//             <li key={bebida.id}>{bebida.nombre}</li>
//           ))}
//         </ul> 
//       ))}
export default Menu

/* {jsonBar.map(it => (<h1>{ it[0]}</h1>))} */
      /* <h1>Bebidas</h1>
      <ul>
        {jsonBar.bebidas.map(item => (
          <li key={item.id}>{item.nombre + " | Precio: " + item.precio}</li>
        ))}
      </ul>
      <h1>Comidas</h1>
      <ul>
        {jsonBar.comidas.map(item => (
          <li key={item.id}>{item.nombre + " " + item.precio}</li>
        ))}
      </ul> */