import React, { useEffect, useState } from "react";
import { listPuestos, deletePuesto } from "../services/PuestoService";
import { useNavigate } from "react-router-dom";

function ListPuestoComponent() {
  const [puestos, setpuestos] = useState([]);
  const navegador = useNavigate();
  useEffect(() => {
    getPuestos();
  }, []);

  function getPuestos() {
    listPuestos()
      .then((response) => {
        // console.log(response.data);
        setpuestos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function AgregarPuesto() {
    navegador("/add-puesto");
  }
  function UpdatePuesto(id) {
    navegador(`/update-puesto/${id}`);
  }

  function removePuesto(id) {
    deletePuesto(id)
      .then((response) => {
        getPuestos();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-center">Lista de Departamentos</h2>
        <button className="btn btn-success" onClick={AgregarPuesto}>
          <i className="bi bi-plus-circle me-2"></i> Agregar Puesto
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
                  <th>Departamento</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {puestos.map((puesto) => (
                  <tr key={puesto.id}>
                    <td>{puesto.id}</td>
                    <td>{puesto.nombre}</td>
                    <td>{puesto.descripcion}</td>
                    <td>{puesto.departamentoid}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => UpdatePuesto(puesto.id)}
                        >
                          <i className="bi bi-pencil"></i> Editar
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removePuesto(puesto.id)}
                        >
                          <i className="bi bi-trash"></i> Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {puestos.length === 0 && (
              <div className="text-center p-4">
                <h5>No hay puestos registrados</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPuestoComponent;
