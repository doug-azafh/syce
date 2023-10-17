import { useState } from "react";
import "./supplier.css";
import Body from "../../components/Body";

export default function Supplier() {
  const [tipoFor, setTipoFor] = useState(null);
  return (
    <>
      <div>
        <fieldset className="cad">
          <legend>Tipo de fornecedor:</legend>
          <div>
            <input
              type="radio"
              id="cpf"
              name="forn"
              value="cpf"
              onChange={(e) => setTipoFor(e.target.value)}
            />
            <label for="cpf">Física</label>

            <input
              type="radio"
              id="cnpj"
              name="forn"
              value="cnpj"
              onChange={(e) => setTipoFor(e.target.value)}
            />
            <label for="cnpj">Jurídica</label>
          </div>
        </fieldset>
      </div>
      <form>
        <Body content={tipoFor}></Body>
      </form>
    </>
  );
}
