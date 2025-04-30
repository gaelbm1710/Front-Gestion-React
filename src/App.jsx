import "./App.css";
import DepartamentoComponent from "./components/DepartamentoComponent";
import EmpleadoComponent from "./components/EmpleadoComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import InicioComponenten from "./components/InicioComponenten";
import ListDepartamentosComponent from "./components/ListDepartamentosComponent";
import ListEmpleadosComponent from "./components/ListEmpleadosComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPuestoComponent from "./components/ListPuestoComponent";
import PuestoComponent from "./components/PuestoComponent";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <HeaderComponent />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<InicioComponenten />} />
            {/* Inicio Empleados */}
            <Route path="/empleados" element={<ListEmpleadosComponent />} />
            <Route path="/add-empleado" element={<EmpleadoComponent />} />
            <Route
              path="/update-empleado/:id"
              element={<EmpleadoComponent />}
            />
            {/* Fin Empleados */}
            {/* Inicio Departamentos */}
            <Route
              path="/departamentos"
              element={<ListDepartamentosComponent />}
            />
            <Route
              path="/add-departamento"
              element={<DepartamentoComponent />}
            />
            <Route
              path="/update-departamento/:id"
              element={<DepartamentoComponent />}
            />
            {/* Fin Departamentos */}
            {/* Inicio Puestos */}
            <Route path="/puestos" element={<ListPuestoComponent />} />
            <Route path="/add-puesto" element={<PuestoComponent />} />
            <Route path="/update-puesto/:id" element={<PuestoComponent />} />
            {/* Fin Puestos */}
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
