import { useState } from "react";
import "./supplier.css";
import Body from "../../components/Body";

export default function Supplier() {
  const [tipoFor, setTipoFor] = useState(null);
  return (
    <>
      <div>
        <div className="space"></div>
        <fieldset className="cad">
          <div>
            <legend>Tipo de fornecedor:</legend>
            <input
              type="radio"
              id="cpf"
              name="forn"
              value="cpf"
              onChange={(e) => setTipoFor(e.target.value)}
            />
            <label htmlFor="cpf">Física</label>

            <input
              type="radio"
              id="cnpj"
              name="forn"
              value="cnpj"
              onChange={(e) => setTipoFor(e.target.value)}
            />
            <label htmlFor="cnpj">Jurídica</label>
          </div>
        </fieldset>
      </div>
      <form>
        {tipoFor !== null ? <Body content={tipoFor}></Body> : <div></div>}
      </form>
    </>
  );
}
