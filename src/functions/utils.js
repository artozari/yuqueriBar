import jsonBar from "../functions/utils";

const buscarApi = (val) => {
  fetch(`http://localhost:4000/bebidas/${val}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Datos recibidos:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const buscar = (datoBuscar) => {
  let datoResult;
  return datoResult;
};

export { buscarApi, buscar };
export default buscar;
