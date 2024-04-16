import React, { useState, useEffect } from "react";
import './style.css';
import Logo from './logoIfood.png'
import { FaUserGear } from "react-icons/fa6";
import {Link} from "react-router-dom";
import { useForm } from 'react-hook-form'
import api  from '../../axios';
import { useNavigate, useParams } from 'react-router-dom'

function EditRestaurant (){

    const { id } = useParams()

    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    useEffect(() => {
        api.get(`/restaurant/${id}`)
      .then((response) => {reset(response.data)})
    }, []);

    function deletePost(id){
        api.delete(`/restaurant/${id}`)        
        navigate('/');
        alert('Cadastro deletado');
      }

    const onSubmit = data => api.put(`/restaurant/${id}`, data)
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

                <h1>Editar restaurante</h1>
                                            
                <div className='input-box'>
                  <input  type="text" name="name" {...register("name")} placeholder='Nome' required />
                </div>

                <div className='input-box'>
                  <input  type="text" name="category" {...register("category")} placeholder='Categoria' required />
                </div>
                    
                <div className='input-box'>
                  <input  type="text" name="description" {...register("description")} placeholder='Descrição' required />
                </div>

                
                <button type="submit" className="btn">Salvar Dados</button>

                <button  onClick={() => deletePost(id) } className="btn"> 
                 Excluir restaurante </button>
                    
                 <Link to="/">Voltar a página inicial</Link>

                </form>

            </div>
        </body>
    )
    
}
export default EditRestaurant