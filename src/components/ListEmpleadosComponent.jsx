import React, { useEffect, useState } from "react";
import { deleteEmpleado, listaEmpleados } from "../services/EmpleadosService";
import { useNavigate } from "react-router-dom";

function ListEmpleadosComponent() {
  const [empleados, setEmpleados] = useState([]);
  const navegador = useNavigate();
  useEffect(() => {
    getEmpleados();
  }, []);

  function getEmpleados() {
    listaEmpleados()
      .then((response) => {
        // console.log("Response:", response.data);
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function AgregarEmpleado() {
    navegador("/add-empleado");
  }

  function updateEmpleado(id) {
    navegador(`/update-empleado/${id}`);
  }

  function removeEmpleado(id) {
    deleteEmpleado(id)
      .then((response) => {
        getEmpleados();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-center">Lista de Empleados</h2>
        <button className="btn btn-success" onClick={AgregarEmpleado}>
          <i className="bi bi-plus-circle me-2"></i> Agregar Empleado
        </button>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Nombre(s)</th>
                  <th>Apellidos</th>
                  <th>E-mail</th>
                  <th>Fecha Nacimiento</th>
                  <th>Lugar Nacimiento</th>
                  <th>Domicilio</th>
                  <th>Puesto</th>
                  <th>Departamento</th>
                  <th>¿Es Gerente?</th>
                  <th>¿Es Directivo?</th>
                  <th>Estatus</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {empleados.map((empleado) => (
                  <tr key={empleado.id}>
                    <td>{empleado.id}</td>
                    <td>{empleado.nombre}</td>
                    <td>{empleado.apellidos}</td>
                    <td>{empleado.email}</td>
                    <td>{empleado.fechanacimiento}</td>
                    <td>{empleado.lugarnacimiento}</td>
                    <td>{empleado.domicilio}</td>
                    <td>{empleado.idpuesto}</td>
                    <td>{empleado.iddepartamento}</td>
                    <td>{empleado.jefe ? "Sí" : "No"}</td>
                    <td>{empleado.superJefe ? "Sí" : "No"}</td>
                    <td>
                      <span
                        className={`badge ${
                          empleado.activo ? "bg-success" : "bg-secondary"
                        }`}
                      >
                        {empleado.activo ? "Activo" : "Inactivo"}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => updateEmpleado(empleado.id)}
                        >
                          <i className="bi bi-pencil"></i> Editar
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeEmpleado(empleado.id)}
                        >
                          <i className="bi bi-trash"></i> Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {empleados.length === 0 && (
              <div className="text-center p-4">
                <h5>No hay empleados registrados</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListEmpleadosComponent;
