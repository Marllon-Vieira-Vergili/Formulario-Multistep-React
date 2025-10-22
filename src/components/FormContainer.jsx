import React from "react";

//Importando os estilos
import "../styles/FormContainer.css";

//Importando o componente filho
import InformacaoTransicao from "./InformacaoTransicao";

//Importar Hooks e Contexto
import { useContext } from "react";
import { FormContext } from "../context/formulario"; //Consumir o contexto

const FormContainer = () => {

    //Constante do nome que será consumido do contexto
    const formState = useContext(FormContext);
    console.log(formState);

  return (
    <div className="form-container">
      {/**Cabeçalho antes */}
      <div className="form-header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto.
        </p>
      </div>

      {/**Inputs dos formulários */}
      <div className="form-input">
        <InformacaoTransicao/>
        <form>
          <div className="form-label">
            <label htmlFor="nome">
              Nome:
              <input
                id="nome"
                type="text"
                required
                placeholder="Digite seu nome"
              />
            </label>
          </div>

          <div className="form-label">
            <label htmlFor="email">
              Email:
              <input
                id="email"
                type="email"
                required
                placeholder="Digite seu email"
              />
            </label>
          </div>

          {/**Label dos botões */}
          <div className="form-buttons">
            <button>Voltar</button>
            <button> Avançar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

//Exportando o componente Form-container
export default FormContainer;
