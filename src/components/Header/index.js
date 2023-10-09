import { useContext } from "react";
import avatarImg from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import {
  FiClipboard,
  FiMenu,
  FiAlertOctagon,
  FiLogOut,
  FiPlus,
  FiSettings,
} from "react-icons/fi";
import "./header.css";

export default function Header() {
  const { user, logout, statusMenu, stateMenu } = useContext(AuthContext);

  return (
    <>
      {stateMenu === false ? (
        <div className="sidebar">
          <div className="menu" style={{ width: 170 }}>
            <button onClick={statusMenu}>
              <FiMenu color="#FFF" size={20} />
            </button>
          </div>
          <div className="principal">
            <FiClipboard color="#FFF" size={20} />
            Controle
            <ul>
              <a>Compras</a>
              <a>Vendas</a>
            </ul>
          </div>

          <div className="principal">
            <FiPlus color="#FFF" size={20} />
            Cadastro
            <ul>
              <a>Fornecedor</a>
              <a>Produto</a>
            </ul>
          </div>
          <span>
            <Link to="#">
              <FiAlertOctagon color="#d8bb18" size={20} />
              Notificações
            </Link>
          </span>
          <div className="endheader">
            <Link to="#">
              <FiSettings color="#FFF" size={20} />
              Configurações
            </Link>
            <div className="image">
              <img
                src={user.avatarUrl === null ? avatarImg : user.avatarUrl}
                alt="Foto do usuário"
              />{" "}
              <h4>{user.nome}</h4>
            </div>

            <button onClick={() => logout()}>
              <FiLogOut color="#dc143c" size={20} />
              Sair
            </button>
          </div>
        </div>
      ) : (
        <div className="sidebar" style={{ width: 60 }}>
          <div className="menu" style={{ width: 60 }}>
            <button onClick={statusMenu}>
              <FiMenu color="#FFF" size={20} />
            </button>
          </div>
          <Link to="#">
            <FiClipboard color="#FFF" size={20} />
          </Link>
          <Link to="#">
            <FiPlus color="#FFF" size={20} />
          </Link>
          <span>
            <Link to="#">
              <FiAlertOctagon color="#d8bb18" size={20} />
            </Link>
          </span>
          <div className="endheader" style={{ marginTop: 270 }}>
            <Link to="#">
              <FiSettings color="#FFF" size={20} />
            </Link>
            <div className="image">
              <img
                src={user.avatarUrl === null ? avatarImg : user.avatarUrl}
                alt="Foto do usuário"
              />{" "}
            </div>

            <button onClick={() => logout()}>
              <FiLogOut color="#dc143c" size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
