import axios from "axios";

const departamentosurl = import.meta.env.VITE_DEPARTAMENTOS;
// const departamentosurl = "http://localhost:8080/api/departamentos"

export const listaDepartamentos = () => {
  return axios.get(departamentosurl);
};

export const createdepartamento = (departamento) => {
  return axios.post(departamentosurl, departamento);
};

export const getDepartamentobyID = (departamentoID) => {
  return axios.get(departamentosurl + "/" + departamentoID);
};

export const updateDepartamento = (departamentoID, departamento) => {
  return axios.put(departamentosurl + "/" + departamentoID, departamento);
};

export const deleteDepartamento = (departamentoID) => {
  return axios.delete(departamentosurl + "/" + departamentoID);
};
