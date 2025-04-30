import React, { useEffect, useState } from "react";
import {
  createdepartamento,
  getDepartamentobyID,
  updateDepartamento,
} from "../services/DepartamentoService";
import { useNavigate, useParams } from "react-router-dom";

function DepartamentoComponent() {
  const [nombre, setnombre] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const navegador = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getDepartamentobyID(id)
        .then((response) => {
          setnombre(response.data.nombre);
          setdescripcion(response.data.descripcion);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const [errors, seterrors] = useState({
    nombre: "",
    descripcion: "",
  });

  function validateForm() {
    var valid = true;
    const errorsCopy = { ...errors };
    if (nombre.trim()) {
      errorsCopy.nombre = "";
    } else {
      errorsCopy.nombre = "Campo Obligatorio";
      valid = false;
    }
    if (descripcion.trim()) {
      errorsCopy.descripcion = "";
    } else {
      errorsCopy.descripcion = "Campo Obligatorio";
      valid = false;
    }
    seterrors(errorsCopy);
    return valid;
  }

  function saveDepartamento(e) {
    e.preventDefault();
    if (validateForm()) {
      const departamento = {
        nombre,
        descripcion,
      };
      if (id) {
        updateDepartamento(id, departamento)
          .then((response) => {
            // console.log(response.data);
            navegador("/departamentos");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createdepartamento(departamento)
          .then((response) => {
            // console.log(response.data);
            navegador("/departamentos");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function regresar() {
    navegador("/departamentos");
  }

  function titulo() {
    if (id) {
      return <h2 className="text-center my-4">Actualizar Departamento</h2>;
    } else {
      return <h2 className="text-center my-4">Nuevo Departamento</h2>;
    }
  }

  return (
    <div className="container">
      {titulo()}
      <form>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Nombre</label>
            <input
              type="text"
              className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
              value={nombre}
              onChange={(e) => setnombre(e.target.value)}
              placeholder="Nombre del Departamento"
            />
            {errors.nombre && (
              <div className="invalid-feedback">{errors.nombre}</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label>Descripción</label>
            <textarea
              type="text"
              className={`form-control ${
                errors.descripcion ? "is-invalid" : ""
              }`}
              value={descripcion}
              onChange={(e) => setdescripcion(e.target.value)}
              placeholder="Descripción del Departamento"
            />
            {errors.descripcion && (
              <div className="invalid-feedback">{errors.descripcion}</div>
            )}
          </div>
        </div>

        <div className="form-group col-md-4">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={regresar}
          >
            Regresar
          </button>
          <button
            type="button"
            className="btn btn-success m-xl-5"
            onClick={saveDepartamento}
          >
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
}

export default DepartamentoComponent;
