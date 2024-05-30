import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import api  from '../../axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

function AddAddress () {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => api.post("/address", data)
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

                <h1>Criar endereço</h1>
                                            
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
                    
                 <Link to="/">Voltar a pagina inicial</Link>

                </form>

            </div>
        </body>
    )
}

export default AddAddress;