import React, { useEffect, useState } from "react";
import {
  createempleado,
  getEmpleadobyID,
  updateEmpleado,
} from "../services/EmpleadosService";
import { useNavigate, useParams } from "react-router-dom";

function EmpleadoComponent() {
  const [nombre, setnombre] = useState("");
  const [apellidos, setapellidos] = useState("");
  const [email, setemail] = useState("");
  const [fechanac, setfechanac] = useState("");
  const [lugarnac, setlugarnac] = useState("");
  const [domicilio, setdomicilio] = useState("");
  const [puesto, setpuesto] = useState("");
  const [departamento, setdepartamento] = useState("");
  const [gerente, setgerente] = useState(false);
  const [directivo, setdirectivo] = useState(false);
  const [estatus, setestatus] = useState(false);
  const navegador = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEmpleadobyID(id)
        .then((response) => {
          setnombre(response.data.nombre);
          setapellidos(response.data.apellidos);
          setemail(response.data.email);
          setfechanac(response.data.fechanacimiento);
          setlugarnac(response.data.lugarnacimiento);
          setdomicilio(response.data.domicilio);
          setpuesto(response.data.puesto);
          setdepartamento(response.data.departamento);
          setgerente(response.data.gerente);
          setdirectivo(response.data.directivo);
          setestatus(response.data.estatus);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const [errors, seterrors] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    fechanac: "",
    lugarnac: "",
    domicilio: "",
    puesto: "",
    departamento: "",
    gerente: "",
    directivo: "",
    estatus: "",
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
    if (apellidos.trim()) {
      errorsCopy.apellidos = "";
    } else {
      errorsCopy.apellidos = "Campo Obligatorio";
      valid = false;
    }
    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Campo Obligatorio";
      valid = false;
    }
    if (fechanac.trim()) {
      errorsCopy.fechanac = "";
    } else {
      errorsCopy.fechanac = "Campo Obligatorio";
      valid = false;
    }
    if (lugarnac.trim()) {
      errorsCopy.lugarnac = "";
    } else {
      errorsCopy.lugarnac = "Campo Obligatorio";
      valid = false;
    }
    if (domicilio.trim()) {
      errorsCopy.domicilio = "";
    } else {
      errorsCopy.domicilio = "Campo Obligatorio";
      valid = false;
    }
    if (puesto.trim()) {
      errorsCopy.puesto = "";
    } else {
      errorsCopy.puesto = "Campo Obligatorio";
      valid = false;
    }
    if (departamento.trim()) {
      errorsCopy.departamento = "";
    } else {
      errorsCopy.departamento = "Campo Obligatorio";
      valid = false;
    }
    if (gerente !== null) {
      errorsCopy.gerente = "";
    } else {
      errorsCopy.gerente = "Campo Obligatorio";
      valid = false;
    }
    if (directivo !== null) {
      errorsCopy.directivo = "";
    } else {
      errorsCopy.directivo = "Campo Obligatorio";
      valid = false;
    }
    if (estatus !== null) {
      errorsCopy.estatus = "";
    } else {
      errorsCopy.estatus = "Campo Obligatorio";
      valid = false;
    }
    seterrors(errorsCopy);
    return valid;
  }

  function saveEmpleado(e) {
    e.preventDefault();
    if (validateForm()) {
      const empleado = {
        nombre,
        apellidos,
        email,
        fechanacimiento: fechanac,
        lugarnacimiento: lugarnac,
        domicilio,
        puesto,
        departamento,
        gerente,
        directivo,
        estatus,
      };
      // console.log("Empleado:", empleado);
      if (id) {
        updateEmpleado(id, empleado)
          .then((response) => {
            // console.log(response.data);
            navegador("/empleados");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createempleado(empleado)
          .then((response) => {
            // console.log(response.data);
            navegador("/empleados");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function regresar() {
    navegador("/empleados");
  }

  function titulo() {
    if (id) {
      return <h2 className="text-center my-4">Actualizar Empleado</h2>;
    } else {
      return <h2 className="text-center my-4">Nuevo Empleado</h2>;
    }
  }

  return (
    <div className="container">
      {titulo()}
      <form>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Nombre(s)</label>
            <input
              type="text"
              className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
              value={nombre}
              onChange={(e) => setnombre(e.target.value)}
              placeholder="Nombre(s) del Empleado"
            />
            {errors.nombre && (
              <div className="invalid-feedback">{errors.nombre}</div>
            )}
          </div>

          <div className="form-group col-md-6">
            <label>Apellidos</label>
            <input
              type="text"
              className={`form-control ${errors.apellidos ? "is-invalid" : ""}`}
              value={apellidos}
              onChange={(e) => setapellidos(e.target.value)}
              placeholder="Apellidos del Empleado"
            />
            {errors.apellidos && (
              <div className="invalid-feedback">{errors.apellidos}</div>
            )}
          </div>

          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email del Empleado"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="form-group col-md-6">
            <label>Fecha de Nacimiento</label>
            <input
              type="date"
              className={`form-control ${errors.fechanac ? "is-invalid" : ""}`}
              value={fechanac}
              onChange={(e) => setfechanac(e.target.value)}
            />
            {errors.fechanac && (
              <div className="invalid-feedback">{errors.fechanac}</div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>Lugar de Nacimiento</label>
            <input
              type="text"
              className={`form-control ${errors.lugarnac ? "is-invalid" : ""}`}
              value={lugarnac}
              onChange={(e) => setlugarnac(e.target.value)}
              placeholder="Lugar de nacimiento"
            />
            {errors.lugarnac && (
              <div className="invalid-feedback">{errors.lugarnac}</div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>Domicilio</label>
            <input
              type="text"
              className={`form-control ${errors.domicilio ? "is-invalid" : ""}`}
              value={domicilio}
              onChange={(e) => setdomicilio(e.target.value)}
              placeholder="Domicilio del Empleado"
            />
            {errors.domicilio && (
              <div className="invalid-feedback">{errors.domicilio}</div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>Puesto</label>
            <input
              type="text"
              className={`form-control ${errors.puesto ? "is-invalid" : ""}`}
              value={puesto}
              onChange={(e) => setpuesto(e.target.value)}
              placeholder="Puesto del Empleado"
            />
            {errors.puesto && (
              <div className="invalid-feedback">{errors.puesto}</div>
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
              placeholder="Departamento del Empleado"
            />
            {errors.departamento && (
              <div className="invalid-feedback">{errors.departamento}</div>
            )}
          </div>
        </div>

        <div className="form-row mt-3">
          <div className="form-group col-md-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={gerente}
                onChange={(e) => setgerente(e.target.checked)}
              />
              <label className="form-check-label">¿Es Gerente?</label>
            </div>
          </div>

          <div className="form-group col-md-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={directivo}
                onChange={(e) => setdirectivo(e.target.checked)}
              />
              <label className="form-check-label">¿Es Directivo?</label>
            </div>
          </div>

          <div className="form-group col-md-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={estatus}
                onChange={(e) => setestatus(e.target.checked)}
              />
              <label className="form-check-label">¿Activo?</label>
            </div>
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
            onClick={saveEmpleado}
          >
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmpleadoComponent;
