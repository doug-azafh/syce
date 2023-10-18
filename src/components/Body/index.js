import { useState, useEffect } from "react";
import "./body.css";
import axios from "axios";

export default function Body({ children, content }) {
  const [uf, setUf] = useState("AC");
  const [listUf, setListUf] = useState([]);
  const [city, setCity] = useState("");
  const [listCity, setListCity] = useState([]);

  function loadUf() {
    let url = "https://servicodados.ibge.gov.br/";
    url = url + "api/v1/localidades/estados";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListUf([...data]);
      });
  }

  function loadCity(id) {
    if (id !== null) {
      let url = "https://servicodados.ibge.gov.br/api/v1/";
      url = url + `localidades/estados/${id}/municipios`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          data.sort((a, b) => a.nome.localeCompare(b.nome));
          setListCity([...data]);
        });
    }
  }
  useEffect(() => {
    loadUf();
  }, []);
  useEffect(() => {
    if (uf) {
      loadCity(uf);
    }
  }, [uf]);

  return (
    <div className="form-body">
      <form>
        {content === "cpf" ? (
          <>
            <label>Nome Completo:</label>
            <input type="text" placeholder="Nome completo" className="ms-1" />
            <br />

            <label>Data de Nascimento:</label>
            <input type="date" className="ms-3" />
            <br />

            <label>CPF:</label>
            <input type="text" placeholder="XXX.XXX.XXX-XX" className="ms-3" />

            <label>RG:</label>
            <input type="text" placeholder="XX.XXX.XXX-X" className="ms-3" />

            <fieldset>
              <legend>Sexo:</legend>
              <div>
                <input type="radio" id="fem" value="fem" />
                <label for="fem">Feminino</label>

                <input type="radio" id="mas" value="mas" />
                <label for="mas">Masculino</label>

                <input type="radio" id="out" value="out" />
                <label for="out">Outros</label>
              </div>
            </fieldset>
          </>
        ) : (
          <>
            <label>Razão Social:</label>
            <input
              type="text"
              placeholder="Razão Social"
              name="nome"
              className="ms-1"
            />
            <br />

            <label>Nome Fantasia:</label>
            <input
              type="text"
              placeholder="Nome Fantasia"
              name="nome"
              className="ms-1"
            />
            <br />

            <label>Data de Abertura:</label>
            <input type="date" className="ms-3" />
            <br />

            <label>CNPJ:</label>
            <input
              type="text"
              placeholder="XXX.XXX.XXX/XXXX-XX"
              className="ms-3"
            />

            <label>Inscrição Estadual:</label>
            <input type="text" placeholder="XXX.XXX.XXX.XXX" className="ms-3" />
            <br />

            <label>Site:</label>
            <input
              type="url"
              className="ms-2"
              placeholder="www.seusite.com.br"
            />
          </>
        )}

        <br />
        <label>E-mail:</label>
        <input type="email" className="ms-2" placeholder="email@email.com" />
        <br />

        <label>CEP:</label>
        <input type="text" className="ms-6" />

        <br />

        <>
          <label>Endereço:</label>
          <input type="text" className="ms-2" />

          <label>Número:</label>
          <input type="text" className="ms-6" />
        </>
        <br />

        <label>Bairro:</label>
        <input type="text" className="ms-3" />

        <label>Estado:</label>
        <select
          className="ms-3"
          value={uf}
          onChange={(e) => setUf(e.target.value)}
          defaultValue={"Selecione a UF"}
        >
          {listUf.map((a, b) => (
            <option value={a.id} defaultValue={"Selecione a UF"}>
              {a.sigla} - {a.nome}
            </option>
          ))}
        </select>

        <label>Cidade:</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          defaultValue={"Selecione um cidade"}
        >
          {listCity.map((a, b) => (
            <option value={a.sigla} defaultValue={"Selecione um cidade"}>
              {a.nome}
            </option>
          ))}
        </select>
        <br />

        <label>Telefone:</label>
        <input type="text" className="ms-3" />

        <label>Celular:</label>
        <input type="text" className="ms-3" />

        <div className="btn-form">
          <button className="ms-3">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
