import React from "react";

function FooterComponent() {
  return (
    <footer className="custom-footer mt-auto py-3">
      <div className="container text-center text-white">
        <small>
          &copy; {new Date().getFullYear()} Carlo Bañuelos. Todos los derechos
          reservados.
        </small>
      </div>
    </footer>
  );
}

export default FooterComponent;
