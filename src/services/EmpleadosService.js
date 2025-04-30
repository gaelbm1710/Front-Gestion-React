import axios from "axios";

const empleadosurl = import.meta.env.VITE_EMPLEADOS;
// const empleadosurl = "http://localhost:8080/api/empleados";

export const listaEmpleados = () => {
  return axios.get(empleadosurl);
};

export const createempleado = (empleado) => {
  return axios.post(empleadosurl, empleado);
};

export const getEmpleadobyID = (empleadoID) => {
  return axios.get(empleadosurl + "/" + empleadoID);
};

export const updateEmpleado = (empleadoID, empleado) => {
  return axios.put(empleadosurl + "/" + empleadoID, empleado);
};

export const deleteEmpleado = (empleadoID) => {
  return axios.delete(empleadosurl + "/" + empleadoID);
};
