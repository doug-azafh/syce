import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [nascimento, setNascimento] = useState();

  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");

  const { singUp, loadingAuth } = useContext(AuthContext);

  /*const schema = z.object({
    name: z
      .string()
      .nonempty("O nome é obrigatório.")
      .regex(/^[A-Za-z]+$/i, "Só letras são permitidas"),
    email: z
      .string()
      .email("Digite um e-mail válido.")
      .nonempty("O e-mail é obrigatório"),
    CPF: z
      .string()
      .nonempty("O CPF é obrigatório.")
      .regex("^[0-9]+$", "Só números são permitidos"),
    nascimento: z.date().nullable("A data de nascimento é obrigatória."),
  });*/

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      cpf !== "" &&
      nascimento !== ""
    ) {
      await singUp(email, password, name, cpf, nascimento);
    }
  }  

  return (
    <div className="main">
      <div className="login">
        <div className="login-area"></div>

        <form onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>E-mail:</label>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <label>
              CPF:
              <input
                className="ajust"
                type="text"
                placeholder="XXX.XXX.XXX-XX"
                value={cpf}
                onChange={(e) => setCPF(e.target.value)}
              />
            </label>

            <label>
              Nascimento:
              <input
                type="date"
                placeholder="Data de Nascimento"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
              />
            </label>
          </div>
          <label>
            Senha:
            <input
              className="ajust"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Confirme a senha:
            <input
              className="ajust"
              type="password"
              placeholder="********"
              value={passwordC}
              onChange={(e) => setPasswordC(e.target.value)}
            />
          </label>
          {password !== passwordC && password !== "" && passwordC !== "" ? (
            <span className="error">As senhas não conferem!</span>
          ) : (
            <div></div>
          )}
          <button type="submit">
            {loadingAuth ? "Carregando..." : "Cadastrar"}
          </button>
        </form>
        <Link to="/">Já possui uma conta? Faça login!</Link>
      </div>
    </div>
  );
}
