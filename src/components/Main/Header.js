import React, {useState,useEffect} from "react";
import Axios from "axios";
import './Header.css';

export default () =>{

    const [userSection,setUserSection] = useState("");

    Axios.defaults.withCredentials = true;

    useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setUserSection(response.data.user[0].login);
      }
    });
    }, []);

    return (
        <div className="pginicial">
        <header>
            <h1 className="logo">Betim Turismo</h1>
            <div id="infoInicial">
                <tr>
                    <td id = "tdHome"> <a href="http://localhost:3000/" id="atdHome">HOME</a> | </td>
                    <td id = "tdServ"> <a href={`http://localhost:3000/${userSection != "" ? "services" : "login" }`} id="aServ"> SERVIÇOS</a> | </td>
                    <td id = "Cont"> <a href="http://localhost:3000/#infoContato" id="aCont">CONTATO</a> |</td>
                    <td id = "acess"> <a href="http://localhost:3000/accessibility" id="aAcc">ACESSIBILIDADE</a></td>
                </tr>
                <div className="cadastro--login">
                    <div className="cadastre">
                        <a href={`http://localhost:3000/${userSection != "" ? "services" : "signup"}`} id="aCad">{userSection != "" ? userSection : "Cadastre-se"}</a> |
                    </div>
                    <div className="login">
                        <a href={`http://localhost:3000/${userSection != "" ? "logout" : "login"}`} id="aLog">{userSection != "" ? "Sair" : "Login"}</a>
                    </div>
                </div>
            </div>   
        </header>                   
        </div>
    )
}