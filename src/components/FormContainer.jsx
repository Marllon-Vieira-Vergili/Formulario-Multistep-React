/**Componente mostrando o formulário principal */

import React from "react";

//Importando os componentes
import Avaliacao from './Avaliacao.jsx';
import InformacaoTransicao from "./InformacaoTransicao.jsx";
import Feedback from "./Feedback.jsx";
import Agradecimento from "./Agradecimento.jsx";
import Cadastro from "./Cadastro.jsx";

//Importando os estilos
import "../styles/FormContainer.css";




//Importar Hooks e Contexto
import { useContext } from "react";
import { FormContext } from "../context/formulario"; //Consumir o contexto

const FormContainer = () => {


  
  //Usar o contexto do formContext, passando o indice atual, e o indice atualizado
  const {actualIndex, updateIndex, formData} = useContext(FormContext);

//Criando os passos de sequência de cada componente
  const steps = [
    //Referências dos componentes para não ser renderizado toda vez
   Cadastro, Feedback, Avaliacao, Agradecimento];

  //Constante para armazenar o passo atual
  const CurrentStep = steps[actualIndex];

  //Função para Impedir de avançar com campos vazios
  const validateCurrentStep =() => {

    switch(actualIndex){
      case 0: //Cadastro
        return formData.nome.trim() !== '' && formData.email.trim() !== '';

      case 1: //Feedback
      return formData.feedback.trim() !== '';

      case 2: //Avaliacao
      return formData.avaliacao !== '';

      default:
        return true; //Não precisa validar no agradecimento
    }
  };



  //Validar 

    //Constante do nome que será consumido do contexto
    const formState = useContext(FormContext);
    console.log(formState);


    //Funções dos botões, voltar e avançar
    const handleChangeBack = (e) => {
      e.preventDefault();

      //Condição para retirar o botão, caso o indice seja o primeiro
      if(actualIndex > 0){
        updateIndex(actualIndex -1);
      }
      
    };


    const handleChangeNext = (e) => {

      if(!validateCurrentStep()){
        alert("Por favor, preencha todos os campos obrigatórios");
        return;
      }

      e.preventDefault();

      //Condição para avançar no botão
      if(actualIndex < steps.length - 1){
        updateIndex(actualIndex + 1);
      }else{
        alert('Avaliação enviada, Obrigado!');
      };

     

    };

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
        <InformacaoTransicao currentIndex={actualIndex}/>
        <form >
        
        {/**Renderiza o componente da etapa atual */}
        <CurrentStep/>


          {/**Label dos botões */}
          <div className="form-buttons">
            <button onClick={handleChangeBack}
              disabled={actualIndex=== 0}>
                Voltar
                </button>
            <button type="button" onClick={handleChangeNext}
            >{actualIndex === steps.length + 1 ? "Enviar Avaliação" : "Avançar"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

//Exportando o componente Form-container
export default FormContainer;
