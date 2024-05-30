import React, { useEffect, useState,  } from "react";
import './estilo.css';
import Logo from './logoIfood.png'
import { FaUserGear } from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useNavigate, useParams } from 'react-router-dom'
import api from "../../axios";
import '../modal/modal.css'


function PageRestaurant (){

    const [ lermais, setLermais ] = useState({})

    const { id } = useParams()

    useEffect(() => {
        api.get(`/restaurant/${id}`)
        .then((response) => {
            setLermais(response.data)
        })
    }, [])

    const [ dishs, setDishs ] = useState([])
    useEffect(() => {
        api.get("/dish")
        .then((response) => {
            setDishs(response.data)
        })
        .catch(() => {
            console.log("Deu errado")
        })
    }, [])

    const [cart, setCart] = useState([]);
    const handleAddCart = (dishName) => {
        setCart((prevCart) => [...prevCart, dishName]);
    };

    const handleRemoveCart = (dishId) => {
        setCart((prevCart) => prevCart.filter(dish => dish.id !== dishId));
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + parseFloat(item.price), 0);
    };

    const handleClearCart = () => {
        setCart([]);
    };

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const navigate = useNavigate();
    const [orderConfirmed, setOrderConfirmed] = useState(false); 

    const handleCheckout = () => {
        setShowModal(true);
      };

    const handleOrderConfirm  = () => {
        setOrderConfirmed(true);
        setTimeout(() => {
            setModalMessage("Pedido Aceito - Em Preparo");
        setTimeout(() => {
          setModalMessage("Pedido saiu para entrega");
          setTimeout(() => {
            setModalMessage("Pedido entregue");
            setTimeout(() => {
              setShowModal(false);
              navigate('/');
            }, 5000);
            }, 5000);
          }, 10000);
        }, 5000);
      };
    

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

            <div className="sacola">
            <h2>Sacola</h2>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - R${item.price},00
                            <button onClick={() => handleRemoveCart(item.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
                <div>
                    <strong>Total: R${calculateTotalPrice()},00</strong>
                </div>
                <button onClick={handleClearCart}>Limpar Carrinho</button>
                <button onClick={handleCheckout}>Finalizar pedido</button>
                </div>
                {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {orderConfirmed ? (
              <h2>{modalMessage}</h2>
            ) : (
              <>
                <h2>Modo De pagamento</h2>
                <button onClick={handleOrderConfirm}>Cartão de crédito</button>
                <button onClick={handleOrderConfirm}>Dinheiro</button>
              </>
            )}
          </div>
        </div>
      )}
            
        <div className="cards">            
            <div className="carde">
                <header>
                    <h2>{lermais.name}</h2>
                </header>
                <div className="line"></div>
                    <p>{lermais.description}</p>
                    <p><strong></strong> {lermais.image}</p>

                    <div className="topico"  ><strong>Cardapio</strong></div>
                    {dishs.map((dish) => {
                    return(
                    
                        
                    <div className="card" >
                    
                    
                    <header>
                        <h2 key={dish.id} > {dish.name} - R${dish.price},00 </h2>
                        <button className="btn-newPost"
                        onClick={() => handleAddCart(dish)}
                        >Adicionar</button>
                        </header>
                        

                    
                </div>
                )
            })}
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