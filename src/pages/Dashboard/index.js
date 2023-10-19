import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import "./dashboard.css";

export default function Dashboard() {
  const { stateMenu } = useContext(AuthContext);
  return (
    <div>
      <Header />
      <>        
      </>
    </div>
  );
}
