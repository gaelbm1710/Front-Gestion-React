import React from "react";

function HeaderComponent() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">
            <i className="bi bi-building me-2"></i> Administración de Empresa
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/empleados">
                  <i className="bi bi-people-fill me-1"></i> Empleados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/departamentos">
                  <i className="bi bi-diagram-3 me-1"></i> Departamentos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/puestos">
                  <i className="bi bi-person-badge-fill me-1"></i> Puestos
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
