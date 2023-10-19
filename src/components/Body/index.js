import { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import "./body.css";
import InputMask from "react-input-mask";
import axios from "axios";

export default function Body({ children, content }) {
  const nome = useRef("");
  const razaoS = useRef("");
  const nomeFant = useRef("");
  const data = useRef("");
  const cpf = useRef("");
  const rg = useRef("");
  const cnpj = useRef("");
  const inscEst = useRef("");
  const sex = useRef("");
  const site = useRef("");
  const email = useRef("");
  const cep = useRef("");
  const end = useRef("");
  const numEnd = useRef("");
  const bairro = useRef("");
  const tel = useRef("");
  const cel = useRef("");
  const [uf, setUf] = useState("AC");
  const [listUf, setListUf] = useState([]);
  const [city, setCity] = useState("");
  const [listCity, setListCity] = useState([]);

  const { cadFornF } = useContext(AuthContext);

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

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("aqui");
    /*
    e.preventDefault();
    console.log("aqui");
    await cadFornF(
      content,
      nome.current.value,
      data.current.value,
      cpf.current.value,
      rg.current.value,
      sex.current.value,
      email.current.value,
      cep.current.value,
      end.current.value,
      numEnd.current.value,
      bairro.current.value,
      uf,
      city,
      tel.current.value,
      cel.current.value
    );*/
  }

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit}>
        {content === "cpf" ? (
          <>
            <label>Nome Completo:</label>
            <input
              type="text"
              placeholder="Nome completo"
              className="ms-1"
              ref={nome}
            />
            <br />

            <label>Data de Nascimento:</label>
            <input type="date" className="ms-3" ref={data} />
            <br />

            <label>CPF:</label>
            <InputMask
              type="text"
              placeholder="XXX.XXX.XXX-XX"
              mask="999.999.999-99"
              className="ms-3"
              ref={cpf}
            />

            <label>RG:</label>
            <InputMask
              type="text"
              placeholder="XX.XXX.XXX-X"
              mask="99.999.999-99"
              className="ms-3"
              ref={rg}
            />

            <fieldset>
              <legend>Sexo:</legend>
              <div>
                <input type="radio" id="fem" value="fem" ref={sex} />
                <label htmlFor="fem">Feminino</label>

                <input type="radio" id="mas" value="mas" ref={sex} />
                <label htmlFor="mas">Masculino</label>

                <input type="radio" id="out" value="out" ref={sex} />
                <label htmlFor="out">Outros</label>
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
              ref={razaoS}
            />
            <br />

            <label>Nome Fantasia:</label>
            <input
              type="text"
              placeholder="Nome Fantasia"
              name="nome"
              className="ms-1"
              ref={nomeFant}
            />
            <br />

            <label>Data de Abertura:</label>
            <input type="date" className="ms-3" ref={data} />
            <br />

            <label>CNPJ:</label>
            <InputMask
              type="text"
              placeholder="XXX.XXX.XXX/XXXX-XX"
              mask="999.999.999/9999-99"
              className="ms-3"
              ref={cnpj}
            />

            <label>Inscrição Estadual:</label>
            <InputMask
              type="text"
              placeholder="XXX.XXX.XXX.XXX"
              className="ms-3"
              mask="999.999.999.999"
              ref={inscEst}
            />
            <br />

            <label>Site:</label>
            <input
              type="url"
              className="ms-2"
              placeholder="www.seusite.com.br"
              ref={site}
            />
          </>
        )}

        <br />
        <label>E-mail:</label>
        <input
          type="email"
          className="ms-2"
          placeholder="email@email.com"
          ref={email}
        />
        <br />

        <label>CEP:</label>
        <InputMask type="text" className="ms-6" mask="99.999-999" ref={cep} />

        <br />

        <>
          <label>Endereço:</label>
          <input type="text" className="ms-2" ref={end} />

          <label>Número:</label>
          <input type="text" className="ms-6" ref={numEnd} />
        </>
        <br />

        <label>Bairro:</label>
        <input type="text" className="ms-3" ref={bairro} />

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
        <InputMask
          type="text"
          className="ms-3"
          mask="(99)99999-9999"
          ref={tel}
        />

        <label>Celular:</label>
        <InputMask
          type="text"
          className="ms-3"
          mask="(99)99999-9999"
          ref={cel}
        />

        <div className="btn-form">
          <button type="submit" className="ms-3">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
