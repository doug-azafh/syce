import { Route, Routes } from "react-router-dom";
import Private from "./Private";
import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";
import Dashboard from "../pages/Dashboard";
import Supplier from "../pages/Supplier";
import Header from "../components/Header";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/register" element={<SingUp />} />
      <Route
        path="/dashboard"
        element={
          <Private>
            <Header />
            <Dashboard />
          </Private>
        }
      />
      <Route
        path="/supplier"
        element={
          <Private>
            <Header />
            <Supplier />
          </Private>
        }
      />
    </Routes>
  );
}

export default RoutesApp;
