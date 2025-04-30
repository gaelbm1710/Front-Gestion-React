import React, { useEffect, useState } from "react";
import {
  createpuesto,
  getPuestobyID,
  updatePuesto,
} from "../services/PuestoService";
import { useNavigate, useParams } from "react-router-dom";

function PuestoComponent() {
  const [nombre, setnombre] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [departamento, setdepartamento] = useState("");
  const navegador = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getPuestobyID(id)
        .then((response) => {
          setnombre(response.data.nombre);
          setdescripcion(response.data.descripcion);
          setdepartamento(response.data.departamento);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const [errors, seterrors] = useState({
    nombre: "",
    descripcion: "",
    departamento: "",
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
    if (departamento.trim()) {
      errorsCopy.departamento = "";
    } else {
      errorsCopy.departamento = "Campo Obligatorio";
      valid = false;
    }
    seterrors(errorsCopy);
    return valid;
  }

  function savePuesto(e) {
    e.preventDefault();
    if (validateForm()) {
      const puesto = {
        nombre,
        descripcion,
        departamento,
      };
      if (id) {
        updatePuesto(id, puesto)
          .then((response) => {
            // console.log(response.data);
            navegador("/puestos");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createpuesto(puesto)
          .then((response) => {
            // console.log(response.data);
            navegador("/puestos");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function regresar() {
    navegador("/puestos");
  }

  function titulo() {
    if (id) {
      return <h2 className="text-center my-4">Actualizar Puesto</h2>;
    } else {
      return <h2 className="text-center my-4">Nuevo Puesto</h2>;
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
              placeholder="Nombre del Puesto"
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
              placeholder="Descripción del Puesto"
            />
            {errors.descripcion && (
              <div className="invalid-feedback">{errors.descripcion}</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label>Departamento</label>
            <input
              type="text"
              className={`form-control ${
                errors.departamento ? "is-invalid" : ""
              }`}
              value={departamento}
              onChange={(e) => setdepartamento(e.target.value)}
              placeholder="Descripción del Puesto"
            />
            {errors.departamento && (
              <div className="invalid-feedback">{errors.departamento}</div>
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
            onClick={savePuesto}
          >
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PuestoComponent;
