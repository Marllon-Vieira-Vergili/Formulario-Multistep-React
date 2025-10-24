/*Componente Context API
Uso: Criação de um componente de contexto de formulário

*/

//Importando o Create Context e useContext
import { createContext } from 'react';
import { useState } from 'react';


import InformacaoTransicao from '../components/InformacaoTransicao';
import Feedback from '../components/Feedback';
import Avaliacao from '../components/Avaliacao';
import Agradecimento from '../components/Agradecimento';



//Criando o contexto
export const FormContext = createContext();



/**Criando o contexto que proverá minha aplicação,
 * ou seja, onde ele será englobado. Será involucrado para nosso componente APP
 */

export const FormProvider = ({children}) =>{

    //Criar um estado para detectar e alterar o índice
    //do componente

    const [formState, setFormState] = useState({
        componentName: "",
        actualIndex: 0,
        formData: { //Estendendo o contexto para outros componentes
            nome: "",
            email: "",
            feedback: "",
            avaliacao: "" //ex:Adorei, recomendo, etc.
        }
    });


    //Função para atualizar os dados do novo formulário, chamando ele no retorno
    //do contexto que será providenciado
    const updateFormData = (field, value) => {
        setFormState(prevState => ({
            ...prevState,
            formData: {
                ...prevState.formData,
                [field]: value, //tudo que for passado no campo do parâmetro recebe o valor
            },
        }));
    };

    //Função para atualizar o índice direto no contexto
    const updateIndex = (newIndex) => {
        setFormState(prevState => ({...prevState, actualIndex: newIndex

        }));
    };

    return(
        /*Retornar de valor, todos os valores do estado formulário
        e o índice atualizado. */
        <FormContext.Provider value={{...formState, 
            updateIndex,
        updateFormData}}>
            {children}
            </FormContext.Provider>
    );
    
}