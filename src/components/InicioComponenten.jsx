import React from "react";
import javaReactImg from "../assets/javareact.png";

function InicioComponenten() {
  return (
    <div className="inicio-container py-5">
      <h1 className="text-center mb-3 display-5 fw-bold">Bienvenido</h1>
      <p className="text-center text-muted fs-6 mb-5 px-3">
        Este es un simulador de una empresa ficticia donde podrás gestionar
        empleados, departamentos y puestos.
      </p>

      <div className="row justify-content-center g-4">
        <div className="col-md-5">
          <div className="custom-card card h-100 text-center">
            <img
              src={javaReactImg}
              className="card-img-top"
              alt="Java y React"
            />
            <div className="card-body">
              <p className="card-text text-secondary">
                En este sitio se prueban APIs desarrolladas con Java y el Front
                está creado con React JS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioComponenten;
