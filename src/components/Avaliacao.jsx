import React, { useContext } from "react";

//Importando contexto e useEffect
import { FormContext } from "../context/formulario";
import { useEffect } from "react";

//Import CSS Styles
import './../styles/Avaliacao.css';

//importar os emojis de avaliação
import {BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill,
BsFillEmojiNeutralFill,
BsFillEmojiFrownFill,
BsFillEmojiAngryFill,
} from "react-icons/bs";

const Avaliacao = () => {


    //Invocando o contexto
    const {formData, updateFormData} = useContext(FormContext);

    //Criando um array com as opções dos emojis

    const opcoes = [

        {value: "Adorei", label: "Adorei", icon: <BsFillEmojiHeartEyesFill/>, className: "love"},
        {value: "Recomendo", label: "Recomendo", icon: <BsFillEmojiSmileFill/>, className: "smile"},
        {value: "Não sei dizer", label: "Não sei dizer", icon: <BsFillEmojiNeutralFill/>, className: "neutral"},
        {value: "Não recomendo", label: "Não recomendo", icon: <BsFillEmojiAngryFill/>, className: "frown"},
    ];

    return(

        <div className="avaliacao-container">

            <p>Agora dê uma avaliação para este produto.</p>

            <div className="container-checkbox"> 

            {/**Utilizando nova estrutura via MAP */}
                
            {opcoes.map((opcao) => (

                <div key={opcao.value} className="checkbox-style">
                    <input type="checkbox"
                    id={opcao.value}
                    name="avaliacao"
                    value={opcao.value}
                    checked={formData.avaliacao === opcao.value}
                    onChange={(e) => updateFormData('avaliacao', e.target.value)}
                    />
                    <label htmlFor={opcao.value}>
                        <span className={`emoji ${opcao.className} ${formData.avaliacao === opcao.value ? 'selected' : ''}`}>
                            {opcao.icon}
                            </span>
                        <span>{opcao.label}</span>
                    </label>
                </div>
            ))}
                

            </div>

        </div>
    );
};

export default Avaliacao;

/*<div className="checkbox-style">
                    <input type="checkbox" id="naoRecomendado"/>
                    <label htmlFor="naoRecomendado" type>
                        <BsFillEmojiFrownFill className="emoji frown"/>
                        <span>Não Recomendo</span>
                    </label>
                </div>

                <div className="checkbox-style">
                    <input type="checkbox" id="nulo"/>
                    <label htmlFor="nulo">
                        <BsFillEmojiNeutralFill className="emoji neutral"/>
                        <span>Não sei dizer</span>
                    </label>
                </div>

                <div className="checkbox-style">
                    <input type="checkbox" id="recomendo"/>
                    <label htmlFor="recomendo">
                        <BsFillEmojiSmileFill className="emoji smile"/>
                        <span>Recomendo</span>
                    </label>
                </div>

                <div className="checkbox-style">
                    <input type="checkbox" id="adorei"/>
                    <label htmlFor="adorei">
                        <BsFillEmojiHeartEyesFill className="emoji love"/>
                        <span>Adorei</span>
                    </label>
                </div> */