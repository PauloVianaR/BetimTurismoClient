import React, { useState} from "react";
import './Signup.css';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

export default () =>{

    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    const history = useHistory();

    const submitCadastrar = async () =>{
        if(email === "" || login === "" || senha === ""){
            window.alert("Favor preenhcer todos os campos!")
        } else if(senha !== confirmSenha){
            window.alert("Falha na confirmação da senha: Senha deve ser igual a sua confirmação!")
        } else {
            await Axios.post("http://localhost:3001/api/insertUser", {
                login: login,
                senha: senha,
                email: email,
            }).then((response) =>{
                if(response.data.message){
                    window.alert(response.data.message);
                }
            })

            history.push("/login");
        }
        
    };

    return(
        <div className="cadastro">
            <form> 
                <h4>Cadastre-se</h4>
                <input type="email" className="cadEmail" placeholder="Email" onChange={(e) => {setEmail(e.target.value);}} />
                <input type="text" className="cadUsuario" placeholder="Nome de Usuário" onChange={(e) => {setLogin(e.target.value);}} />
                <input type="password" className="cadSenha" placeholder="Senha" onChange={(e) => {setSenha(e.target.value);}} />
                <input type="password" className="cadSenha--confirm" placeholder="Confirmar Senha" onChange={(e) => {setConfirmSenha(e.target.value);}} />
                <input type="submit" value="Cadastrar" onClick={submitCadastrar} />
            </form>
        </div>
    )
}