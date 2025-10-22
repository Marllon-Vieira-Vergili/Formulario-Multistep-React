/**Componente será dinâmico 
 * Informando a etapa que o usuário está atualmente,
 * em cima do formulário de avaliação.
 * 
 * Etapa 1 - Inscrição
 * Etapa 2 - Feedback
 * Etapa 3 - Avaliacao
 * Etapa 4 - Agradecimento
 * 
 * Componente filho do FormContainer
*/

//import dos Estilos 
import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'; //Inscrição/Avaliação
import {FiSend} from 'react-icons/fi'; //Feedback
import { AiOutlineSmile } from 'react-icons/ai'; //Agradecimento

//Import do CSS
import '../styles/InformacaoTransicao.css';

import React from "react";

const InformacaoTransicao = ({passos}) => {


    return(

        <div className='container-steps'>

            <div className='step active'>
                 <AiOutlineUser/>
            <p>Cadastro </p>
            </div>
           
            <div className='step'>
                <FiSend/>
                <p>Feedback </p>
            </div>
            
            <div className='step'>
                <AiOutlineStar/>
                <p>Avaliação</p>
            
            </div>
            
            <div className='step'>
            <AiOutlineSmile/>
            <p>Agradecimento</p>
            </div>
            
        </div>
    );
};

export default InformacaoTransicao; 