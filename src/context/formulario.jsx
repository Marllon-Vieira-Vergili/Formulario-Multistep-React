/*Componente Context API
Uso: Criação de um componente de contexto de formulário

*/

//Importando o Create Context e useContext
import { createContext, useContext } from 'react';



//Criando o contexto
export const FormContext = createContext();

//Criando o valor para provermos ao nosso formulário
const value = {

    componentName: "Teste",
};


/**Criando o contexto que proverá minha aplicação,
 * ou seja, onde ele será englobado. Será involucrado para nosso componente APP
 */

export const FormProvider = ({children}) =>{

    return(
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
    );
    
}