import React, { useState, useEffect } from "react";
import './style.css'
import Logo from './logoIfood.png'
import { FaUserGear } from "react-icons/fa6";
import {Link} from "react-router-dom";
import api  from '../../axios';

function Home (){

    const [restaurants, setRestaurants] = useState([])
    
    useEffect(() => {
        api.get("/list-restaurant")
        .then((response) => {
            setRestaurants(response.data)
        })
        .catch(() => {
            console.log("Deu errado")
        })

    },[])

    const nome = localStorage.getItem('name')

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
                        <div>Olá,    {nome}                        <Link to = "/cadastro">
                            <FaUserGear  /></Link>
                        </div>
                    </div> 
                </div>
            </header>

            <main>
            <div className="cards">

                {restaurants.map((restaurant) => {
                    return(
                    
                    <div className="card" >
                    
                    <header>
                        <h2 key={restaurant.id} > {restaurant.name}   </h2>
                    </header>
                    <div className="line"></div>
                    <p>{restaurant.description}</p>

                    <div className="btns" >

                        <div className="btn-edit">
                            <Link to={{pathname: `/editRestaurant/${restaurant.id}`}}>
                                <button>Editar</button>
                            </Link>
                        </div>

                        <div className="btn-readmore" >  
                            <Link to={{pathname: `/pageRestaurant/${restaurant.id}`}}>
                                <button>Ver mais</button>
                            </Link>
                        </div>

                    </div>
                </div>
                )
            })}
            
        </div>
            <div className="btn-newPost" >
                <Link to="/AddRestaurant">
                <button>Adicionar novo restaurante</button>
                </Link>
            </div>
            </main>
        </body>
    )}



export default Home;