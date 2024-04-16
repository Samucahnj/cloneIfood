import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import api  from '../../axios';

function Cadastro () {

    const [user, setUser] = useState([]);

    useEffect(() => {
        api.get("/user/33")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  const endereço = localStorage.getItem('Endereço')
  
    return (
        <body className='bodyLogin'>
        <div className='wrapper'>
            
                <h1>Dados do Usuario</h1>
                                            
              <fieldset className='box' ><legend className='legenda'>Nome</legend> {/* -------------- Caixa de texto E-Mail  --------------*/}  
                    {user?.name}
                </fieldset>
                <fieldset className='box' ><legend className='legenda'>E-mail</legend> {/* -------------- Caixa de texto E-Mail  --------------*/}  
                    {user?.email}
                </fieldset>
                <fieldset className='box' ><legend className='legenda'>Telefone</legend> {/* -------------- Caixa de texto E-Mail  --------------*/}  
                    {user?.phone}
                </fieldset>
                <fieldset className='box' ><legend className='legenda'>Endereço</legend> {/* -------------- Caixa de texto E-Mail  --------------*/}  
                    {endereço}
                </fieldset>
                
                
                <Link to="/"   >
                Voltar a pagina inicial
                </Link>
                
                <Link to="/cadastrar" className='textLeft'>
                Editar cadastro
                </Link>
            </div>
            </body>
    )
}

export default Cadastro;