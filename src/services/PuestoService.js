import axios from "axios";

const puestosurl = import.meta.env.VITE_PUESTOS;
// const puestosurl ="http://localhost:8080/api/puestos"

export const listPuestos = () => {
  return axios.get(puestosurl);
};

export const createpuesto = (puesto) => {
  return axios.post(puestosurl, puesto);
};

export const getPuestobyID = (puestoID) => {
  return axios.get(puestosurl + "/" + puestoID);
};

export const updatePuesto = (puestoID, puesto) => {
  return axios.put(puestosurl + "/" + puestoID, puesto);
};

export const deletePuesto = (puestoID) => {
  return axios.delete(puestosurl + "/" + puestoID);
};
