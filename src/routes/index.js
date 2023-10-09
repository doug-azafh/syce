import { Route, Routes } from "react-router-dom";
import Private from "./Private";
import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";
import Dashboard from "../pages/Dashboard";

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
    </Routes>
  );
}

export default RoutesApp;
