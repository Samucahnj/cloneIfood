import React, { useState, useEffect } from 'react';
import './style.css';
import { Link, useHistory, useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import api  from '../../axios';


    function Cadastrar() {

      const navigate = useNavigate();

      const email = localStorage.getItem('e-mail')
      useEffect(() => {
        api.get("/user/33")
      .then((response) => {reset(response.data)})
    }, []);


    const onSubmit = data => api.put("/user/33", data)
    .then(() => {
        console.log("Deu tudo certo")
        navigate('/');
        alert('Cadastro atualizado');
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })

    const {register, handleSubmit, formState: {errors}, reset } = useForm()

    function deletePost(id){
      api.delete(`/user/${id}`)
    }
 
    return (
        <body className='bodyLogin'>
        <div className='wrapper'>
            
            <form onSubmit={handleSubmit(onSubmit)}>

                <h1>Dados do Usuario</h1>
                                            
                <div className='input-box'>
                  <input  type="text" name="name" {...register("name")} placeholder='Nome' required />
                </div>

                <div className='box'type="text">{email} </div>
                    
                <div className='input-box'>
                  <input  type="text" name="phone" {...register("phone")} placeholder='Telefone' required />
                </div>

                <button className="btn"> 
                 Salvar Dados </button>
                    
                 <button onClick={() => deletePost(33) } className="btn"> 
                 Excluir perfil </button>
                 
                 <Link to="/">
                Voltar a página inicial
                </Link>
                </form>

            </div>
            </body>
    )
    
}

export default Cadastrar;