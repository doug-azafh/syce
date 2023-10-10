import { useState } from "react";
import Header from "../../components/Header";
import "./supplier.css";

export default function Supplier() {
  const [tipoFor, setTipoFor] = useState(null);
  return (
    <>
      <Header />
      <div>
          <fieldset className="cad">
            <legend>Tipo de fornecedor:</legend>
            <div>
              <input type="radio" id="cpf" name="forn" value="cpf" checked />
              <label for="cpf">Física</label>

              <input type="radio" id="cnpj" name="forn" value="cnpj" />
              <label for="cnpj">Jurídica</label>
            </div>
          </fieldset>
      </div>
    </>
  );
}
