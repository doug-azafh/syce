import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import "./singin.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SingIn() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { singIn, loadingAuth } = useContext(AuthContext);

  async function handleSignIn(e) {
    e.preventDefault();

    if ((user !== "") & (password !== "")) {
      await singIn(user, password);
    }
  }

  return (
    <div className="main">
      <div className="login">
        <div className="login-area"></div>
        <form onSubmit={handleSignIn}>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="Digite o CPF ou e-mail cadastrado"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">
            {loadingAuth ? "Carregando..." : "Acessar"}
          </button>
        </form>
        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}
