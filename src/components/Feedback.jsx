//Importar contexto e Hook UseCOntext
import React, { useContext } from "react";
import { FormContext } from "../context/formulario";

//Import CSS Styles
import './../styles/Feedback.css';


const Feedback = () => {

    //contante para chamar o contexto
      const {formData, updateFormData} = useContext(FormContext);

    return(

        

        <div className="feedback-container">
            
            <p>Conte-nos mais sobre o que achou do produto.</p>

            <textarea placeholder="Escreva uma breve descrição..." 
            required 
            onChange={(e) => updateFormData('feedback', e.target.value)}
            value={formData.feedback}
            />
                
        </div>
    );
};

export default Feedback;