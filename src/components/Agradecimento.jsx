import React, { useContext } from "react";
import { FormContext } from "../context/formulario";

//Import CSS Styles
import './../styles/Agradecimento.css';

//Importar os emojis
import {BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill,
BsFillEmojiNeutralFill,
BsFillEmojiFrownFill,
} from "react-icons/bs";

const Agradecimento = () => {

    //chamando o useContext
    const { formData } = useContext(FormContext);

    return(

        
        <div className="agradecimento-container">
            
            <div className="agradecimento-informations">
                <p>Muito obrigado por deixar seu feedback!</p>

            <h2>Agora falta Pouco...</h2>

            <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.

                Para concluir sua avaliação, clique no botão de Enviar abaixo.</p>
            </div>
            
            {/**Container do resumo das informações */}
            <div className="container-info-resume">

                <h3>Resumo das Suas informações:</h3>

                
                <div className="satisfation-product">
                    <p><strong>Nome:</strong>{formData.nome}</p>
                    <p><strong>Email:</strong>{formData.email}</p>
                    <p><strong>Sua satisfação com o produto:</strong> "{formData.avaliacao || 'Não informada'}"</p>
                </div>

                <div className="comment-product">
                    <p><strong>Comentário:</strong></p>
                    <p>{formData.feedback || 'Nenhum comentário'}</p>
                </div>

                {/**Botão de avançar é alterado para botão de enviar */}
            </div>
                
            
        </div>
    );
};

export default Agradecimento;