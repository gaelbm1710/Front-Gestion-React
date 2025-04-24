import axios from "axios";

const empleadosurl = import.meta.env.VITE_EMPLEADOS;
// const empleadosurl = "http://localhost:8080/api/empleados";

export const listaEmpleados = () => {
  return axios.get(empleadosurl);
};
