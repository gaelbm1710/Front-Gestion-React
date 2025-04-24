import React, { useEffect, useState } from "react";
import { listaEmpleados } from "../services/EmpleadosService";
import { useNavigate } from "react-router-dom";

function ListEmpleadosComponent() {
  const [empleados, setEmpleados] = useState([]);
  const navegador = useNavigate();
  useEffect(() => {
    listaEmpleados()
      .then((response) => {
        console.log("Response:", response.data);
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function AgregarEmpleado() {
    navegador("/add-empleado");
  }
  return (
    <div className="container">
      <h2 className="text-center">Lista de Empleados</h2>
      <button className="btn btn-dark" onClick={AgregarEmpleado}>
        Agregar Empleado
      </button>
      <table className="table table-striped table-bordered">
        <thead>
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
              <td>{empleado.activo ? "Activo" : "Inactivo"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmpleadosComponent;
