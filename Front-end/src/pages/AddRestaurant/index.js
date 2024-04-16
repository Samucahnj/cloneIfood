import React, { useState } from "react";
import './style.css';
import Logo from './logoIfood.png'
import { FaUserGear } from "react-icons/fa6";
import {Link} from "react-router-dom";
import { useForm } from 'react-hook-form'
import api  from '../../axios';
import { useNavigate } from 'react-router-dom';

function AddRestaurant (){
    
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => api.post("/restaurant", data)
    .then(() => {
        console.log("Deu certo")
        navigate('/');
    })
    .catch(() =>{
        console.log("Deu errado")
    })

    return(
        <body className='bodyLogin'>
            <div className='wrapper'>
        
            
            <form onSubmit={handleSubmit(onSubmit)}>

                <h1>Criar restaurante</h1>
                                            
                <div className='input-box'>
                  <input  type="text" name="name" {...register("name")} placeholder='Nome' required />
                </div>

                <div className='input-box'>
                  <input  type="text" name="category" {...register("category")} placeholder='Categoria' required />
                </div>
                    
                <div className='input-box'>
                  <input  type="text" name="description" {...register("description")} placeholder='Descrição' required />
                </div>

                <div className='input-box'>
                  <input  type="text" name="image" {...register("image")} placeholder='Endereço' required />
                </div>

                <div className='input-box'>
                  <input  type="text" name="dish_id" {...register("dish_id")} placeholder='numero' required />
                </div>
               
                <button type="submit" className="btn">Salvar Dados</button>
                    
                 <Link to="/">Voltar a pagina inicial</Link>

                </form>

            </div>
        </body>
    )
}
export default AddRestaurant