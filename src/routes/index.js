import { Route, Routes } from "react-router-dom";
import Private from "./Private";
import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";
import Dashboard from "../pages/Dashboard";
import Supplier from "../pages/Supplier";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/register" element={<SingUp />} />
      <Route
        path="/dashboard"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />
      <Route
        path="/supplier"
        element={
          <Private>
            <Supplier />
          </Private>
        }
      />
    </Routes>
  );
}

export default RoutesApp;
