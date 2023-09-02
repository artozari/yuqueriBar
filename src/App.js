// jsonBar.bebidas.filter((item) => item.nombre === datoBuscar)
import "./App.css";
import Buscador from "./components/Buscador";
import Cabecera from "./components/pure/Cabecera";
import Menu from "./components/pure/Menu";
import jsonBar from "./barYuqueri.json";
import { useState } from "react";
// import jsonBar from "./barYuqueri.json";

function App() {
  const buscar = (datoBuscar) => {
    let datoResult;
    if (datoBuscar !== "") {
      let encontrado = false;
      for (const val of Object.keys(jsonBar)) {
        for (const elemento of jsonBar[val]) {
          if (elemento.nombre.toLowerCase().includes(datoBuscar.toLowerCase())) {
            datoResult = elemento;
            encontrado = true;
            break;
          }
        }
      }
      if (!encontrado) {
        datoResult = "naranjas";
      }
    } else {
      datoResult = "nada";
    }
    setProdBuscado(datoResult);
    console.log(datoResult);
  };

  const [prodBuscado, setProdBuscado] = useState("");

  return (
    <div className="App">
      <Cabecera />
      <Buscador buscar={buscar} />
      {prodBuscado ? (
        <div>
          <h3>{`${prodBuscado.nombre} ........ ${prodBuscado.precio}$us`}</h3>
          <Menu />
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
}

export default App;
