import React, {useState,useEffect} from "react";
import Axios from "axios";
import './Header.css';

export default () =>{

    const [userSection,setUserSection] = useState("");

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        const loadAll = async() =>{
            await Axios.get("http://betimturismo-backend.herokuapp.com/login").then((response) => {
                if (response.data.loggedIn == true) {
                    setUserSection(response.data.user[0].login);
                }
            });
        }

        loadAll();

    }, []);

    return (
        <div className="pginicial">
        <header>
            <h1 className="logo">Betim Turismo</h1>
            <div id="infoInicial">
                <tr>
                    <td id = "tdHome"> <a href="http://betimturismo.netlify.app/" id="atdHome">HOME</a> | </td>
                    <td id = "tdServ"> <a href={`http://betimturismo.netlify.app/${userSection != "" ? "services" : "login" }`} id="aServ"> SERVIÇOS</a> | </td>
                    <td id = "Cont"> <a href="http://betimturismo.netlify.app/#infoContato" id="aCont">CONTATO</a> |</td>
                    <td id = "acess"> <a href="http://betimturismo.netlify.app/accessibility" id="aAcc">ACESSIBILIDADE</a></td>
                </tr>
                <div className="cadastro--login">
                    <div className="cadastre">
                        <a href={`http://betimturismo.netlify.app/${userSection != "" ? "services" : "signup"}`} id="aCad">{userSection != "" ? userSection : "Cadastre-se"}</a> |
                    </div>
                    <div className="login">
                        <a href={`http://betimturismo.netlify.app/${userSection != "" ? "logout" : "login"}`} id="aLog">{userSection != "" ? "Sair" : "Login"}</a>
                    </div>
                </div>
            </div>   
        </header>                   
        </div>
    )
}