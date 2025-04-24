import "./App.css";
import EmpleadoComponent from "./components/EmpleadoComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import InicioComponenten from "./components/InicioComponenten";
import ListEmpleadosComponent from "./components/ListEmpleadosComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <HeaderComponent />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<InicioComponenten />} />
            <Route path="/empleados" element={<ListEmpleadosComponent />} />
            <Route path="/add-empleado" element={<EmpleadoComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
