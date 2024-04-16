import React, { useEffect, useState } from "react";
import './estilo.css';
import Logo from './logoIfood.png'
import { FaUserGear } from "react-icons/fa6";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom'
import api from "../../axios";

function PageRestaurant (){

    const [ lermais, setLermais ] = useState({})

    const { id } = useParams()

    useEffect(() => {
        api.get(`/restaurant/${id}`)
        .then((response) => {
            setLermais(response.data)
        })

    }, [])


    return(
        <body className="bodyHome">
            <header className="headerMenu">
                <div className="interface">
                    <div className="logo">
                        <img src={Logo} alt="Logo ifood" />
                    </div>
                    <nav className="menu-desktop">
                        <ul>
                        </ul>
                    </nav>
                    <div className="usuario">
                        <div>Olá,                            <Link to = "/cadastro">
                            <FaUserGear  /></Link>
                        </div>
                    </div> 
                </div>
            </header>
        <div className="cards">

            <div className="carde">

                <header>
                    <h2>{lermais.name}</h2>
                </header>
                <div className="line"></div>
                    <p>{lermais.description}</p>
                    <p><strong>Endereço:</strong> {lermais.image}</p>
            </div>
        </div>

            <div className="btn-newPost" >
                <Link to={"/"}>
                <button>Voltar a página inicial</button>
                </Link>
            </div>
        </body>
    )
}
export default PageRestaurant