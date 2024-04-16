import logo from './logo.svg';
import './App.css';
import LoginForm from './componets/loginForm/LoginForm';
import React, { createContext, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Cadastrar from './pages/cadastrar'
import PageRestaurant from './pages/PageRestaurant';
import EditRestaurant from './pages/EditRestaurant';
import AddRestaurant from './pages/AddRestaurant';
import api from './axios'


function App() {  

   const  [user, setUser] = useState(null)

  const actionLoginDataGoogle = async (u) =>{
    let newUser = {
      id: u.uid,
      name : u.displayName,
      email : u.email
    }
    api.post('/user', {
      name: u.displayName,
      email: u.email,
      active: true,
      avatar: "avtus",
      phone: 123456789,
      idAddress: 12
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
    localStorage.setItem('id', u.uid,)
    localStorage.setItem('name', u.displayName,)
    localStorage.setItem('e-mail' , u.email,)
    const ide = localStorage.getItem('id')
    setUser(ide)
  }

  const actionLoginDataFacebook = async (u) =>{
    let newUser = {
      id: u.uid,
      name : u.displayName,
      email : u.email
    }
    localStorage.setItem('id', u.uid,)
    localStorage.setItem('name', u.displayName,)
    localStorage.setItem('e-mail' , u.email,)
    const ide = localStorage.getItem('id')
    setUser(ide)
  }


  
  if(user === null){
    return(
    <LoginForm onReceiveGoogle={actionLoginDataGoogle}
    onReceiveFacebook={actionLoginDataFacebook}
    />
    )
  }

  return (   
        <Router>
          <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/cadastro" element={<Cadastro/>}/>
            <Route path="/cadastrar" element={<Cadastrar/>}/>
            <Route path="/PageRestaurant/:id" element={<PageRestaurant/>}/>
            <Route path="/EditRestaurant/:id" element={<EditRestaurant/>}/>
            <Route path="/AddRestaurant" element={<AddRestaurant/>}/>
            </Routes>
        </Router>
  );
}

export default App;
