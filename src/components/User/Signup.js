import React, { useEffect, useState } from "react";
import './Signup.css';
import Axios from 'axios';

export default () =>{

    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const submitCadastrar = () =>{
        Axios.post("https://localhost:3001/api/insert", {
            login: login,
            senha: senha,
            email: email
        }).then(() =>{
            window.alert('Cadastro realizado!')
        })
    };

    return(
        <div className="cadastro">
            <form> 
                <h4>Cadastre-se</h4>
                <input type="text" className="cadEmail" placeholder="Email" onChange={(e) => {setEmail(e.target.value);}} />
                <input type="text" className="cadUsuario" placeholder="Nome de Usuário" onChange={(e) => {setLogin(e.target.value);}} />
                <input type="password" className="cadSenha" placeholder="Senha" onChange={(e) => {setSenha(e.target.value);}} />
                <input type="password" className="cadSenha--confirm" placeholder="Confirmar Senha" />
                <input type="submit" value="Cadastrar" onClick={submitCadastrar} />
            </form>
        </div>
    )
}