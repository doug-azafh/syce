import "./body.css";
export default function Body({ children, content }) {
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
              placeholder="Razão Social"
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
            <input type="url" className="ms-2" />
          </>
        )}

        <br />
        <label>E-mail:</label>
        <input type="email" className="ms-2" />
        <br />

        <label>CEP:</label>
        <input type="text" className="ms-6" />

        <br />

        <label>Endereço:</label>
        <input type="text" className="ms-3" />

        <label>Número:</label>
        <input type="text" className="ms-6" />
        <br />

        <label>Bairro:</label>
        <input type="text" className="ms-3" />

        <label>Cidade:</label>
        <input type="text" className="ms-3" />

        <label>Estado:</label>
        <input type="text" className="ms-3" />
        <br />

        <label>Telefone:</label>
        <input type="text" className="ms-3" />

        <label>Celular:</label>
        <input type="text" className="ms-3" />
        <button className="ms-3">Cadastrar</button>
      </form>
    </div>
  );
}
