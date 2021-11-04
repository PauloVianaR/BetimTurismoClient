import React from "react";
import './Header.css';

export default () =>{

    return (
        <div className="pginicial">
        <header>
            <h1 className="logo">Betim Turismo</h1>
            <div id="infoInicial">
                <tr>
                    <td id = "tdHome"> <a href="https://naughty-brahmagupta-18bfa7.netlify.app/" id="atdHome">HOME</a> | </td>
                    <td id = "tdServ"> SERVIÇOS |</td>
                    <td id = "Cont"> <a href="https://naughty-brahmagupta-18bfa7.netlify.app/#infoContato" id="aCont">CONTATO</a> |</td>
                    <td id = "acess"> ACESSIBILIDADE</td>
                </tr>
                <div className="cadastro--login">
                    <div className="cadastre"><a href="https://naughty-brahmagupta-18bfa7.netlify.app/signup" id="aCad">Cadastre-se</a> |</div>
                    <div className="login"><a href="https://naughty-brahmagupta-18bfa7.netlify.app/login" id="aLog">Login</a></div>
                </div>
            </div>   
        </header>                   
        </div>
    )
}