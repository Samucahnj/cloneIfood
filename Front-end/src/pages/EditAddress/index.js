import React, { useState, useEffect } from "react";
import './style.css';
import { FaUserGear } from "react-icons/fa6";
import {Link} from "react-router-dom";
import { useForm } from 'react-hook-form'
import api  from '../../axios';
import { useNavigate, useParams } from 'react-router-dom'

function EditAddress (){
  
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    useEffect(() => {
        api.get(`/address/5`)
      .then((response) => {reset(response.data)})
    }, []);

    function deletePost(){
        api.delete(`/address/5`)        
        navigate('/');
        alert('Cadastro deletado');
      }

    const onSubmit = data => api.put(`/address/5`, data)
    .then(() => {
        console.log("Deu tudo certo")
        navigate('/');
        alert('Cadastro atualizado');
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })

    return(
        <body className='bodyLogin'>
            <div className='wrapper'>
            
            <form onSubmit={handleSubmit(onSubmit)}>

                <h1>Editar endereço</h1>
                                            
                <div className='input-box'>
                  <input  type="text" name="address" {...register("address")} placeholder='Endereço' required />
                </div>
                    
                <div className='input-box'>
                  <input  type="text" name="house_number" {...register("house_number")} placeholder='Nº' required />
                </div>

                <div className='input-box'>
                  <input  type="text" name="zip_code" {...register("zip_code")} placeholder='CEP' required />
                </div>

                <div className='input-box'>
                  <input  type="text" name="neighborhood" {...register("neighborhood")} placeholder='Bairro' required />
                </div>

                <div className='input-box'>
                  <input  type="text" name="city" {...register("city")} placeholder='Cidade' required />
                </div>

                <div className='input-box'>
                  <input  type="text" name="state" {...register("state")} placeholder='Estado' required />
                </div>

                <div className='input-box'>
                  <input  type="text" name="complement" {...register("complement")} placeholder='Complemento' required />
                </div>

                <button type="submit" className="btn">Salvar Dados</button>

                <button  onClick={() => deletePost() } className="btn"> 
                 Excluir endereço </button>
                    
                 <Link to="/">Voltar a página inicial</Link>

                </form>

            </div>
        </body>
    )
    
}
export default EditAddress