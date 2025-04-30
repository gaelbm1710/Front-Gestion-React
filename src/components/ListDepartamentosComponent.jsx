import React, { useEffect, useState } from "react";
import {
  listaDepartamentos,
  deleteDepartamento,
} from "../services/DepartamentoService";
import { useNavigate } from "react-router-dom";

function ListDepartamentosComponent() {
  const [departamentos, setDepartamentos] = useState([]);
  const navegador = useNavigate();
  useEffect(() => {
    getDepartamentos();
  }, []);

  function getDepartamentos() {
    listaDepartamentos()
      .then((response) => {
        // console.log(response.data);
        setDepartamentos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function AgregarDepartamento() {
    navegador("/add-departamento");
  }

  function UpdateDepartamento(id) {
    navegador(`/update-departamento/${id}`);
  }

  function removeDepartamento(id) {
    deleteDepartamento(id)
      .then((response) => {
        getDepartamentos();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-center">Lista de Departamentos</h2>
        <button className="btn btn-success" onClick={AgregarDepartamento}>
          <i className="bi bi-plus-circle me-2"></i> Agregar Departamento
        </button>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {departamentos.map((departamento) => (
                  <tr key={departamento.id}>
                    <td>{departamento.id}</td>
                    <td>{departamento.nombre}</td>
                    <td>{departamento.descripcion}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => UpdateDepartamento(departamento.id)}
                        >
                          <i className="bi bi-pencil"></i> Editar
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeDepartamento(departamento.id)}
                        >
                          <i className="bi bi-trash"></i> Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {departamentos.length === 0 && (
              <div className="text-center p-4">
                <h5>No hay departamentos registrados</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListDepartamentosComponent;
