import React, { useState } from "react";

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

  return (
    <div className="container">
      <h2 className="text-center my-4">Nuevo Empleado</h2>
      <form>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Nombre(s)</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setnombre(e.target.value)}
              placeholder="Nombre(s) del Empleado"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Apellidos</label>
            <input
              type="text"
              className="form-control"
              value={apellidos}
              onChange={(e) => setapellidos(e.target.value)}
              placeholder="Apellidos del Empleado"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email del Empleado"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Fecha de Nacimiento</label>
            <input
              type="date"
              className="form-control"
              value={fechanac}
              onChange={(e) => setfechanac(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Lugar de Nacimiento</label>
            <input
              type="text"
              className="form-control"
              value={lugarnac}
              onChange={(e) => setlugarnac(e.target.value)}
              placeholder="Lugar de nacimiento"
            />
          </div>
          <div className="form-group col-md-4">
            <label>Domicilio</label>
            <input
              type="text"
              className="form-control"
              value={domicilio}
              onChange={(e) => setdomicilio(e.target.value)}
              placeholder="Domicilio del Empleado"
            />
          </div>
          <div className="form-group col-md-4">
            <label>Puesto</label>
            <input
              type="text"
              className="form-control"
              value={puesto}
              onChange={(e) => setpuesto(e.target.value)}
              placeholder="Puesto del Empleado"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Departamento</label>
            <input
              type="text"
              className="form-control"
              value={departamento}
              onChange={(e) => setdepartamento(e.target.value)}
              placeholder="Departamento del Empleado"
            />
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
      </form>
    </div>
  );
}

export default EmpleadoComponent;
