import React from "react";

function HeaderComponent() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Administración de Empresa
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/empleados">
                  Empleados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/departamentos">
                  Departamentos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/puestos">
                  Puestos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
