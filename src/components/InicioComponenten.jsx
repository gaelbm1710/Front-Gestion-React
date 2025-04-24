import React from "react";

function InicioComponenten() {
  return (
    <div className="container">
      <h1 className="text-center">Bienvenido</h1>
      <h6 className="text-center">
        Hola, este es un simulador pequeño de una empresa ficticia en el cual
        podrás ver, agregar, eliminar y editar empleados, departamentos y
        puestos.
      </h6>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <img
                class="card-img-top"
                src="src\assets\javareact.png"
                alt="Card image cap"
              ></img>
              <p class="card-text">
                En este sitio se prueban APIS desarrolladas con Java y el Front
                esta desarrollado con React JS.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <img
                class="card-img-top"
                src="src\assets\verceljpeg.jpg"
                alt="Card image cap"
              ></img>
              <p class="card-text">
                Este sitio y el backend se encuentran desplegados en Vercel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioComponenten;
