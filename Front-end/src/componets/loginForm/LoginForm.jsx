/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock} from "react-icons/fa";
import firebase from "../../service/firebase"
import {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import facebookAuth from "../../service/firebase"


export default ({onReceiveGoogle, onReceiveFacebook}) => {

    const actionLoginGoogle = async ()=>{
        let result = await firebase.googleLogar()
        if(result){
            onReceiveGoogle(result.user)
                }else{
            alert('Error')
        }
    }

    async function facebookAuthButtonClicked() {
        let result = await firebase.facebookAuth()
        if(result){
            onReceiveFacebook(result.user)
                }else{
            alert('Error')
        }
    }
    
    return (
        <body className='bodyLogin'>
        <div className='wrapper'>
            
                <h1>Login</h1>
                                            
              {/*<div className='input-box'> {/* -------------- Caixa de texto E-Mail  --------------*/}  
                   {/* <input type="text" placeholder='Email' required /> 
                    <FaUser className='icon' />
                </div>
                

                <div className="remember-forgot"> {/* -------------- Esqueceu a senha e lembrar-me --------------*/}
                  {/*<label><input type="checkbox"/>Lembrar-me</label>
                    <a href="#">Esqueceu a senha ?</a>
                </div>

                <button class='btn' type='submit'> Login </button> {/* -------------- Botão login --------------*/}

               
                <button className="btn" onClick={facebookAuthButtonClicked}> 
                <FaFacebookF className='iconAlign'/>
                 Fazer login com o Facebook </button> {/* -------------- Caixa de login Facebook --------------*/}
                    
                <button className="btn"  onClick={actionLoginGoogle}>
                <FaGoogle className='iconAlign'/>
                Fazer login com o Google
                </button>{/* -------------- Caixa de login Google --------------*/}
               


            
            </div>
            </body>
        
    )
}
