import React, {useState} from "react";
import './Login.css';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

export default () =>{
    
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loginStatus,setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const submitLogin = async() => {
        await Axios.post("http://localhost:3001/api/getLogin", {
            email: email,
            senha: senha,
        }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message);
                window.alert("Usuário ou senha incorretos!")
            }else{
                setLoginStatus(response.data[0].login);
                window.alert("Login completado!");
            }
        })

        if(loginStatus !== ""){
            history.push("/accessibility");
        }
    }

    return(
        <div className="log-in">
            <form> 
                <h4>{loginStatus != "" ? loginStatus : "Fazer Login"}</h4>
                <input type="email" className="logUsuario" placeholder="Email" onChange={(e) => {setEmail(e.target.value);}} />
                <input type="password" className="logSenha" placeholder="Senha" onChange={(e) => {setSenha(e.target.value);}} />
                <input type="submit" value="Login" onClick={submitLogin} />
            </form>
        </div>
    )
}