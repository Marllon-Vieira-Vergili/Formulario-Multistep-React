/**Componente de cadastro */

import React, { useContext } from 'react'
import { FormContext } from '../context/formulario';

//Import dos CSS
import '../styles/Cadastro.css';

const Cadastro = () => {

  //contante para chamar o contexto
  const {formData, updateFormData} = useContext(FormContext);
  
  return (

    <div>

           <div className="form-label">
            <label htmlFor="nome">
              Nome:
              <input
                id="nome"
                type="text"
                required
                placeholder="Digite seu nome"
                onChange={(e) => updateFormData('nome', e.target.value)}
                value={formData.nome} //Pegar o valor do nome no formData
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
                onChange={(e) => updateFormData('email', e.target.value)}
                value={formData.email}
              />
            </label>
          </div>

    </div>
  )
}

export default Cadastro;