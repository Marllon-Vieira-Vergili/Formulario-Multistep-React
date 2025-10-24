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
import {AiOutlineUser, AiOutlineStar, AiOutlineSmile } from 'react-icons/ai'; //Inscrição/Avaliação
import {FiSend} from 'react-icons/fi'; //Feedback


//Import do CSS
import '../styles/InformacaoTransicao.css';

import React from "react";

//Vai receber como props o indice atual para atualizar
const InformacaoTransicao = ({currentIndex}) => {

    const steps = [
        {icon: <AiOutlineUser/>, label: "Cadastro"},
        {icon: <FiSend/>, label: "Feedback"},
        {icon: <AiOutlineStar/>, label: "Avaliação"},
        {icon: <AiOutlineSmile/>, label: "Agradecimento"},
    ];

    return(

        <div className='container-steps'>

            {/**Mapear todos os valores um para cada div */}

            {steps.map((step, index) => (
                <div key={index} 
                className={`step ${index === currentIndex ? 'active' : ''}`}>
                   
                    {step.icon}
                    <p>{step.label}</p>
                </div>
            ))}
                
            
        </div>
    );
};

export default InformacaoTransicao; 