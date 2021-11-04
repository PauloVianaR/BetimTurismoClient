import React from "react";
import './Login.css';

export default () =>{
    return(
        <div className="log-in">
            <form> 
                <h4>Fazer Login</h4>
                <input type="text" className="logUsuario" placeholder="Nome de Usuário" />
                <input type="password" className="logSenha" placeholder="Senha" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}